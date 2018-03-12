from .base import BaseObject

class PartOfSpeech(BaseObject):
    def __init__(self, tag, aspect, case, form, gender, mood, number,
                person, proper, reciprocity, tense, voice):
        self.tag = tag
        self.aspect = aspect
        self.case = case
        self.form = form
        self.gender = gender
        self.mood = mood
        self.number = number
        self.person = person
        self.proper = proper
        self.reciprocity = reciprocity
        self.tense = tense
        self.voice = voice

    @classmethod
    def from_language_cloud_repr(cls, pos):
        return cls(
            pos.tag,
            pos.aspect,
            pos.case,
            pos.form,
            pos.gender,
            pos.mood,
            pos.number,
            pos.person,
            pos.proper,
            pos.reciprocity,
            pos.tense,
            pos.voice,
        )
    
    def __meta__(self):
        return tuple(self.__dict__.values())
