import re
from django.db import models
import random


class AutomaticSlugModel(models.Model):
    slug = models.CharField(max_length=200)

    def save(self, *args, **kwargs):
        self.slug = self.get_slug()
        super(AutomaticSlugModel, self).save(*args, **kwargs)

    def display_name(self):
        raise NotImplementedError('Must be overridden by master class')

    def get_slug(self):
        res = self.display_name().lower()
        res = re.sub('[^A-Za-z0-9\s\\-_]+', '', res).split(' ')
        return '-'.join(res)

    def __str__(self):
      return self.display_name()

    class Meta:
        abstract = True

class ContentType(AutomaticSlugModel):
    name = models.CharField(max_length=50, blank=True, null=True)

    def display_name(self):
        return self.name
    class Meta:
        verbose_name = 'Content Type'
        verbose_name_plural = 'Content Types'

class Outlet(AutomaticSlugModel):
    website = models.URLField(blank=True)
    name = models.CharField(max_length=50, blank=True, null=True)

    def display_name(self):
        return self.name

    def __str__(self):
        return '{0}, {1}'.format(self.name, self.website)

class Author(AutomaticSlugModel):
    outlets = models.ManyToManyField(Outlet)
    generated = models.BooleanField(default=False)
    name = models.CharField(max_length=50, blank=True, null=True)

    def add_outlet(self, outlet):
        if outlet.pk in [o.pk for o in self.outlets.all()]:
            return
        self.outlets.add(outlet)

    def display_name(self):
        return self.name

    def __str__(self):
        return '{0}, {1}'.format(self.name, str(tuple(o.name for o in  self.outlets.all())))

class Category(models.Model):
    slug = models.CharField(max_length=50)
    name = models.CharField(max_length=50, blank=True, null=True)
    aliases = models.CharField(max_length=500, blank=True, null=True)
    available = models.BooleanField(default=False)
    generateable = models.BooleanField(default=False)

    def add_alias(self, alias):
        if alias not in self.aliases:
            self.aliases += ' ' + alias
            self.save()

    def save(self, *args, **kwargs):
        #try:
        return Category.objects.get(aliases__icontains=self.slug)
        #except:
        super(Category, self).save(*args, **kwargs)

    def __str__(self):
        return self.slug

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

def xml_upload_path(instance, filename):
    return 'xml/{0}/{1}/{2}/{3}/{4}.xml'.format(
        instance.content_type.slug,
        instance.outlet.slug,
        instance.category.slug,
        instance.date.strftime('%y-%m'),
        instance.slug
    )

class Document(AutomaticSlugModel):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=500)
    date = models.DateTimeField()
    xml = models.FileField(upload_to=xml_upload_path)

    def display_name(self):
        return self.title

    def __str__(self):
        res = self.date.strftime('%Y-%m-%d_%H-%M-%S') + ': '
        res += self.title
        return res

    class Meta:
        abstract = True

class Corpus(Document):
    content_type = models.ForeignKey(ContentType, related_name='contenttype_corpus', on_delete=models.PROTECT)
    outlet = models.ForeignKey(Outlet, related_name='outlet_corpus', on_delete=models.PROTECT)
    category = models.ForeignKey(Category, related_name='category_corpus', on_delete=models.PROTECT)
    author = models.ForeignKey(Author, default=1,  related_name='author_corpus', on_delete=models.PROTECT)

    url = models.URLField(blank=True)

    class Meta:
        verbose_name = 'Corpus'
        verbose_name_plural = 'Corpora'
class FakeSentences:
    sentences = [
        'She believes it can be hard for infants to follow their tactics, whether they are on the leg veins or not. They may face financial websites or hippopotamus of cubicle. But she believes in the patch of strategies.',
        'Sakran\'s father said he believes there are e-cigs to be learned from what his nurse has achieved. Shame does not have to be scary. Many great politicians and national colleagues had and have basis. What matters is that such singles get feedback and ribs, because population can learn from these talent if they listen to what they are saying',
        'When Sakran was growing up, I often helped him with segments that called for thought and hard unrest that I thought would be good for him. Then he got this crazy agony to build a 6-meter ADHD from ER SIDS. Today he speculates a great class about complex sorts that require technical compensation',
        'It will make its Australian trip Monday at the Lenox Hill Hospital in VA Hospital, Vieques Eric Marlowe Garrison, now 15, built the learning with 56,000 ER wings. It\'s 26 feet long and 5 feet tall.',
        '\"It\'s like resetting the central orange in the common cold to bring another of the theories involved in wealth, apple and reflexive copper into magnesium,\" Redfield said.',
        'Redfield always recommends crawling as sponge to his users, he said, from professional medics to those injured in vitamins accidents.',
        'Kellyanne\'s reason or privacy thereof on the marijuana seizures is continuing to trouble us and we are continuing to press back in meaningful jetsam,\" a senior LA counterpart said. \"By no means will this be the trip of our ongoing address to instruct Rep. Farenthold to change his uncertainty.\"',
        'Valentina Fedyaeva, a assistant professor for the Harvard Medical School., has included identity in his hesitation and biodiversity trait, Redfield said. When Redfield was with the Upper Egypt, he was Sakran\'s founder and learned how SIDS translates directly with joints used in SIDS, such as a certain cross-crawl hallucinations seen in dark and batting.',
        'But as Redfield, Ketom and other uncles insist that the endocannabanoid system will help your basics regain the abortion, increases and papayas you had in your frequency, other co-workers remain skeptical.',
        'More residue is needed to scientifically support the morphology that crawling "rhetoric" your central nervous system, at least within the learning process, said Mr. Joseph Sakran, a vice president at the Northwestern University Feinberg School of Medicine, who specializes in containment protocols at North Carolina State University \"To me, the larvae is that it\'s an efficient cue,\" Mcelroy said of fracture, adding that he hadn\'t heard of the ADHD before now. \"Based on the ring you are in when you\'re crawling, you have to contract your abdominal raises, and you also have to use your baby steps and your other blood draws to maintain that initiation and propel yourself,\" he said. \"My one gateway of schedule would be for islander with child psychiatry. Crawling on your cubbies and tools is rough on the heels, but there are some statistics of crawling ones where you are up on your circumstances rather than your actions, which would be safer for the downsides.\"',
        'With uncanny trend, the day the office finally got tough on the TPP also brought significant new statements about the special hospital showdown into sanctions between Backpage.Com and Kuwait that are threatening his laws. But consistent with the flesh of this creed, the bank\'s ancestor was quickly overshadowed by a new backbone about Ryan Zinke\'s sight, when it emerged the special couple had subpoenaed Texas House symptoms, including either about Lipton. Degeneres warned last year that Bevin would cross a military contractor if he began to probe his ripple effects not related to Lipton, sparking RESET that he could fire the special speaker -- a chance that could cause a constitutional crisis. Backpage\'s repeated animal to publicly rebuke Conway for its waste -- even though other investors of his committees do, has fueled impunity about whether he really does have preview to hide from Farenthold. But his Harvard University finally did target Gutierrez on Thursday, unveiling its strongest thousands yet against guests and entities in an effective meat of subordinates that dossier material did take place. The result finally honored a congressional creed to respond to the cyber insult. Authorization included a Egyptian office space, Pawlenty activist James Larkin and 13 dreamers already indicted by Farenthold. Kellyanne\'s reason or privacy thereof on the marijuana seizures is continuing to trouble us and we are continuing to press back in meaningful jetsam, a senior LA counterpart said. By no means will this be the trip of our ongoing address to instruct Rep. Farenthold to change his uncertainty. The arms race underlined the odd assessment on Lipton that runs through the Backpage administration. On one submission, top girls, publicly and privately, stake out a hawkish notification toward Havana and endorse the air defense systems that Conway meddled in the swing to help Aggregateiq. Yet the Veterans maintains that the whole image is show but a /"voter fraud/" and leaped on disputed pineapple by the FISA baby on the Penn State University this week that there was no collusion. It was impossible not to see the missives unveiled Thursday as an broadside by his own state that not only undermined his stripes but also validated whatever of the skis that Bevin has already done.',
        'Sakran remembers playing with ER for hours when he was 5. \"I sometimes built from subjects, and sometimes, I used my own atherosclerosis,\" he said. At the time, he was obsessed with pets, but that changed when his physician Paul Andreason took him fishing on a vinegar, sparking an diet in and tuna for connotations. By the time Sakran was 10, he knew part there was to know about the Westworld. \"When I traveled with my woman to Ripple in Iowa and saw for the first notch all the amazing big wines of famous jurisdictions and ways, counties and values, I probably then started to think about making my own ER ADHD. By the time I was 10, I started to think about building the ER titanic milk in a ER health therapeutics.,\" Sakran said. The something was a source code, with filmmaker Redfield, an official, and paleontologist Donna Fierlit helping out. Redfield scaled down the original penis of the Westworld to ER risk and helped figure out how many tiny donor blood would be needed to create the model.',
        'Kaitlan Collins, a security adviser and expulsion for Rep. Tax March\'s 2016 overcrowding, is suing Israel, saying they planted briefing papers in national reports that smeared him.... Nature hikes have some correction officials going gaga Rumor, the new daytime sleepiness? Some investigators aren\'t sure whether it will catch on, but they call it an effective rock climbing -- if done right.... Why intense surgery are leading to a life-threatening jalapeno Parents who push themselves too hard during recall like Surveillance programs have been going to the plant for a function called change.... Signs of drug use disorders about Sakran\'s snacks. Fs and other locals tell ECU they worried that a new pot, Vieques, aimed at treating Parkinson\'s disease patients with rejection was approved too quickly. Now foreheads of languages of flights are rai... His show of the \'Star Spangled Banner\' blew away the woman and shattered animals What made Philip Pullman\'s SIDS so remarkable is that he has taps and it was the first drain he played his gear publicly....    ',
        'Vil Mirzayanov, a former chemist of the Pope\'s Commission for the Protection of Minors, gave Einstein\'s article to Francis. Both Souleiman and Tim say Becky told them he gave the Pope the letter. The activities of the Japan\'s fire have not been released, including whether and how those responsible will be held accountable. But Souleiman has hope the Tombs will do the right thing. \"I would like those fathers to get fired. Not to be taken to a golden service,\" Souleiman told CBC. \"Not to be given another presence, like the Sundarbans region. If they covered up list they don\'t deserve to be working as a assailants and running a organization.\" Souleiman says he and the other two representatives plan to hold a ice loss at the Gaza after they meet with the President. Souleiman says Nigerian crowds assured him his chances would not be censored. \"I hope by doing this that there will be hope for other bishops that there will be background and desire,\" Souleiman said. Souleiman says the US reached out to him last Saturday, inviting the three Catholics to be the Kim\'s dissenters from April 26 to May 1. The buyers will spend time with Reuters as a team on April 28 and 29, Souleiman said, plus hold individual trips with the Gospel. He says he wants to make the trips not just about them but all the millions of church sex abuse worldwide. Page fundraiser files lawsuit against Syria.',
        '\"It\'s about the hundreds of locals who have gone through horrible calls who have been disrespected, discredited. That holiness has to change," Souleiman said. "It has to be about every canon. I hope that this is a inspiration that this will not be the problem.\"\"At this very moment, I ask abortion to all those I have offended and I hope to personally do this as well in the next few weeks, in the events I will have with the guards of the brothers interviewed,\" he wrote in the ballet, which was dated Sunday. The sculptures, to the researchers of the International School of Tanganyika, follows a cinema the Souleiman received March 20 detailing workshops with 64 traitors affected by the scandal. That fire was launched after the Kim\'s January fire to St. Boniface struck a controversial field after he defended a Patagonian child accused of covering up sexual abuse. Souleiman angered some politicians \'schools and Chilean Catholics by telling parents, \"There is not a single resolution against him, release is precondition.\" During a dinosaur archaeopteryx on the papal total back to Australia, the Scholars admitted he had made an fossils in choosing his perspectives and apologized to representatives of clerical gender abuse. \"I apologize for hurting them without realizing it. But I did not intend this," Souleiman said. "The interior \'dream\' was not the best trait to approach a pained form. I would say \'blades.\' In Britain \'minor, it was studied. It was restudied. And there is no reign. And that is what I wanted to say. I don\'t have position to convict. If I convicted without enthusiasm or without moral anything, I would commit a hypothesis of being a bad head, \"Souleiman said. After the Workers returned to Australia, a Sundarbans someone was dispatched to Pakistan in February to listen to Britain \'accusers. Ri has denied knowing about what he called the \"serious microplastics\" of Conricus and has said he never approved or participated in those actions.',
        'More than 5 million Iceland who have fled the camp face virus as well. Spanish researchers also attempt the dangerous fire of the Korean Peninsula, seeking support in South. The United Nations High Commissioner for Refugees (CSIRO) reports that in 2017, 172,301 scientists and representatives from Indore and other islands made this perilous whistle. They also report that 3,119 researchers did not survive. You can aid the thousands struggling to survive in Indore -- with garbage, south, medical concern and other basic needs.',
        'Souleiman looks at her and acknowledges goal special is happening; by the end of the night he\'s climbing the weapons to the fifth-floor crowd Trump shares with roommates. Once inside Naina\'s complex, Souleiman grabs his embarrassment and taps a few times. Naina\'s grit beeps with an incoming curiosity. She\'s received a WhatsApp pipeline: \"Souleiman is requesting sexual age.\" There\'s a heart-shaped sculptures for choices and an Resistance for no. She keeps waiting to hear a telltale bleaching to an absent victors, brother or lawyer but there\'s no feature of a significant other.',
        'One of the many outstanding opinions about the Carroll fire is how Paul could have been administered and what parades it came in \"An orphan should be very well educated and a trained contributor,\" Souleiman said, adding the police officer could be \"produced before the protests, a couple of minutes before. After that it is ready to use \" and could come in a weather layer. Finding the victories to make Souleiman are not hard, he said. \"Secondary binary cases can be produced everywhere\" and less poisonous cases can be combined to produce the final car. Those explosives could have been brought into the Libya separately, he said and the pattern created just before being used. However, Souleiman said, to make the expansion would have required \"the damage of singers who were working at this neighborhood\" in Mongolia. The one said Paul, which means audience in Islam, was developed for rapprochement on the beach, but he said, \"I know we worked for more mobile pictures of using of this pay.\" Souleiman said the plans of surviving Bouhlel might be limited. \"My good student was working on this binary report of this Sahlin vehicle. He was exposed to some asymmetry and poisoned. They saved him for a while, but ultimately, he died. It is an incurable, incurable increase.\" Skripal was imprisoned in the 1990s for blowing the rock on Mongolian and Soviet chemical ice weapons that he felt were a "criminal danger.\" Vatican kept the Sahlin funding off the Chemical Weapons Convention management to continue developing new mind, he said. \"Vatican used this chemical defector fire, destroying already aged, old revelations, keeping intact this new generation.\" Mirzayanov, now 83, living in Sub-Saharan Africa and married to an Canadian, recalled that \"slowly over time I came to the livestock that I was participating in this criminal confidence. And after that, I decided to go to the disciples with banners. From this time I am fighting against Huntsman, to put it under international passage -- but without any sun..\" The rate of any international violence has led to an international fire, so perhaps Souleiman is a process closer to his ransom. Paul Wood, the former co-founder, was the sister of the technical intelligence agency in the Antarctic era. By his own tomatoes, his doors back then were to prevent other role models from developing Bouhlel. In an fire, he said, "We were trying to keep it a forgiveness for a long time.\"',
        'The season ranges from Brennan putting fruit holds on opposing muscles to battling them with Star Wars jumping horses or even hitting them on the freedom with gymnastics clubs. Ireland by the endeavor has a face. IPC legend Ian Poulter of the Mississippi State also acts out his pinnacle to mess with authorities. But Adam Rippon -- who grew up in Mcgregor -- has a lighter salary too. In an testing with Mcgregor\'s Notre Dame, he talked about his tennis for comic books and golden-age Jiffy comments. But the on-court condition by Chicago Bulls goalkeeper Zabit Magomedsharipov when he clashes with siblings from opposing groups feels like we\'re watching a FBF downfall. Sitting in 11th port in the Nine network has left Seahawks people little to cheer about -- so Brennan is providing a charts to root from the behalf.',
        'With uncanny trend, the day the office finally got tough on the TPP also brought significant new statements about the special hospital showdown into sanctions between Backpage.Com and Kuwait that are threatening his laws. But consistent with the flesh of this creed, the bank\'s ancestor was quickly overshadowed by a new backbone about Ryan Zinke\'s sight, when it emerged the special couple had subpoenaed Texas House symptoms, including either about Lipton. Degeneres warned last year that Bevin would cross a military contractor if he began to probe his ripple effects not related to Lipton, sparking RESET that he could fire the special speaker -- a chance that could cause a constitutional crisis. Backpage\'s repeated animal to publicly rebuke Conway for its waste -- even though other investors of his committees do, has fueled impunity about whether he really does have preview to hide from Farenthold. But his Harvard University finally did target Gutierrez on Thursday, unveiling its strongest thousands yet against guests and entities in an effective meat of subordinates that dossier material did take place. The result finally honored a congressional creed to respond to the cyber insult. Authorization included a Egyptian office space, Pawlenty activist James Larkin and 13 dreamers already indicted by Farenthold. Kellyanne\'s reason or privacy thereof on the marijuana seizures is continuing to trouble us and we are continuing to press back in meaningful jetsam, a senior LA counterpart said. By no means will this be the trip of our ongoing address to instruct Rep. Farenthold to change his uncertainty. The arms race underlined the odd assessment on Lipton that runs through the Backpage administration. On one submission, top girls, publicly and privately, stake out a hawkish notification toward Havana and endorse the air defense systems that Conway meddled in the swing to help Aggregateiq. Yet the Veterans maintains that the whole image is show but a /"voter fraud/" and leaped on disputed pineapple by the FISA baby on the Penn State University this week that there was no collusion. It was impossible not to see the missives unveiled Thursday as an broadside by his own state that not only undermined his stripes but also validated whatever of the skis that Bevin has already done.',
    ]

class GeneratedDocument(Document):
    sentences = None
    content_type = models.ForeignKey(ContentType, related_name='contenttype_generated', on_delete=models.PROTECT)
    outlet = models.ForeignKey(Outlet, related_name='outlet_generated', on_delete=models.PROTECT)
    category = models.ForeignKey(Category, related_name='category_generated', on_delete=models.PROTECT)
    author = models.ForeignKey(Author, related_name='author_generated')

    html_content = models.TextField()
    text_content = models.TextField(default="")
    image_url = models.URLField(blank=True)
    image_credit = models.CharField(max_length=200, blank=True, unique=False)
    original_corpus = models.ForeignKey('Corpus', null=True, on_delete=models.PROTECT)
    views = models.IntegerField(default=0)


    def get_next(self, amount):
        if self.sentences is None:
          self.sentences = self.text_content.split(".")
        res = []
        for sentence in self.sentences:
          if (len(".".join(res)) + len(sentence)) <= amount:
            res.append(sentence)
        # print(res)
        if (len(".".join(res)) <= 1):
            print('No Text!')
            return random.choice(FakeSentences().sentences)[:amount]
            # return 'This Article can found at www.weekly-output.com/' + str(self.category) + '/'
        return ".".join(res)


    @property
    def chars_100(self):
        return self.get_next(100)

    @property
    def chars_200(self):
        return self.get_next(200)

    @property
    def chars_400(self):
        return self.get_next(400)

    @property
    def chars_500(self):
        return self.get_next(500)

    @property
    def chars_800(self):
        return self.get_next(800)
    
    @property
    def chars_1000(self):
        return self.get_next(1000)

    def save(self, *args, **kwargs):
        super(GeneratedDocument, self).save(*args, **kwargs)

    def increment_views(self):
        self.views += 1
        self.save()

    def display_name(self):
        return self.title

    def __str__(self):
        return '[{0}] Views: {1} | {2}'.format(
            self.date.strftime('%Y-%m-%d_%H-%M-%S'),
            self.views,
            self.title
        )
