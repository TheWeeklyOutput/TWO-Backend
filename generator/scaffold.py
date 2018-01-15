class DocumentScaffold:
    def __init__(self, context, sentences):
        self.context = context
        self.sentences = sentences

    @staticmethod
    def from_document(document):
        context = Context.from_document(document)
        sentences = []

        if document.tokens:
            offset = 0
            token = document.tokens.pop(0)
            for sentence in document.sentences:
                words = []
                while token.text_begin < sentence.begin:
                    words.append(token)
                    token = document.tokens.pop(0)
                    offset += 1

                sentences.append(SentenceScaffold(words))

        return DocumentScaffold(context, sentences)

    def to_content(self):
        res = ' '
        in_chars = {
            '[ ]': False,
            '( )': False,
            '\'': False,
            '"': False,
        }

        space = True
        next_space = True
        for sentence in self.sentences:
            for token in sentence.words:  
                dash = token.text_content in '— – - _'
                abr = token.text_content in '\'s n\'t'
                space = space and not dash and not abr
                next_space = next_space and not dash

                space = space and token.part_of_speech.tag != 'PUNCT'
                space = space and token.edge_label != 'PS'

                for chars, in_char in in_chars.items():
                    if token.text_content in chars:
                        in_chars[chars] = not in_char
                        next_space = next_space and in_char
                        space = space and not in_char

                if space:
                    res += ' '

                res += token.text_content
                space = next_space
                next_space = True

            res += ' \n'
  
        headline = 'No Headline :('
        arr = res.split('-#-')
        if len(arr[0]) < 100:
            headline = arr.pop(0) + ' -'

        res = ''.join(arr)
        res = res.replace(' " ', ' "')
        res = res.replace(' \' ', ' \'')

        return headline, res, self.context.entities, self.sentences


    def fill_with_context(self, context): #omfg
        self.context = context
        for i, sentence in enumerate(self.sentences):
            for j, t in enumerate(sentence.words):
                for e in context.entities:
                    for m in e.mentions:
                        if m.mapped and hasattr(m, 'replace_token'):
                            if t == m.token:
                                self.sentences[i].words[j] =  m.replace_token
                            if t == m.edge:
                                self.sentences[i].words[j] =  m.replace_edge
                            if t == m.root:
                                self.sentences[i].words[j] =  m.replace_root

        for e in context.entities:
            print(e.__dict__)        

class Context:
    def __init__(self, entities):
        self.entities = entities
    
    def replace_from_user(self):
        mapped_tokens = []
        for i, e in enumerate(self.entities):
            print()
            print('Entity', i, '/', len(self.entities))
            for j, m in enumerate(e.mentions):
                if m.mapped:
                    print('Mention', j, '/', len(e.mentions))
                    print()
                    if m.token not in mapped_tokens:
                        m.token.text_content = input('Word: ' + m.token.text_content + ': ')
                        mapped_tokens.append(m.root)
                    if m.edge not in mapped_tokens:
                        m.edge.text_content = input('Edge: ' + m.edge.text_content + ': ')
                        mapped_tokens.append(m.edge)
                    if m.root not in mapped_tokens:
                        m.root.text_content = input('Root: ' + m.root.text_content + ': ')
                        mapped_tokens.append(m.root)
                    e.mentions[j] = m
                    print()
        self.entities[i] = e

    @staticmethod
    def from_document(document):
        for i, e in enumerate(document.entities):
            for j, m in enumerate(e.mentions):
                m.mapped = False
                e.mentions[j] = m
            document.entities[i] = e


        entities = []
        for e in document.entities:
            for t in document.tokens:
                for i, m in enumerate(e.mentions):
                    if not m.mapped:
                        if t.text_begin == m.text.begin_offset:
                            if t.edge_label not in ['ATTR']:
                                m.token = t
                                m.edge = document.tokens[t.edge_index]
                                m.root = m.edge
                                while True:
                                    if m.root.edge_label == 'ROOT':
                                        break
                                    m.root = document.tokens[m.root.edge_index]
                                m.mapped = True
                                e.mentions[i] = m
            entities.append(e)
        return Context(entities)

class SentenceScaffold:
    def __init__(self, words):
        self.words = words
