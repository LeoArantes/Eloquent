#from time import sleep
from leia import SentimentIntensityAnalyzer
import speech_recognition as sr
import os

# function log that prints text into a file
def log(text):
    with open('log.txt', 'a') as f:
        f.write(text)


def read_file(file_name):
    analyzer = SentimentIntensityAnalyzer().polarity_scores
    with open(file_name, 'r') as f:
        for line in f:
            Sentence = [str(line)]
            for i in Sentence:
                v = analyzer(i)
                if v["compound"] >= 0.05:
                    print(f"{line}(SENTIMENTO POSITIVO)", end='')
                elif v["compound"] <= -0.05:
                    print(f"{line}(SENTIMENTO NEGATIVO)", end='')
                elif (v["compound"] > -0.05) and (v["compound"] < 0.05):
                    print(f"{line}(SENTIMENTO NEUTRO)", end='')

            #sleep(5)


def hear_me():
    analyzer = SentimentIntensityAnalyzer().polarity_scores

    recognizer = sr.Recognizer()
    recognize_google = recognizer.recognize_google
    r_listen = recognizer.listen
    adjust_for_ambient_noise = recognizer.adjust_for_ambient_noise

    with sr.Microphone() as source:
        # log('Limpando ruidos do ambiente...')
        adjust_for_ambient_noise(source, duration=1)

        while True:
            # log('Fale algo...\n')
            recordedaudio = r_listen(source)

            try:
                text = recognize_google(
                    recordedaudio, language='pt-br')
            except Exception as ex:
                log(ex)

            # Sentiment analysis
            if str(text) == "sair":
                break

            Sentence = [str(text)]
            for i in Sentence:
                v = analyzer(i)
                if v["compound"] >= 0.05:
                    print(f"{text}(SENTIMENTO POSITIVO)")
                elif v["compound"] <= -0.05:
                    print(f"{text}(SENTIMENTO NEGATIVO)")
                elif (v["compound"] > -0.05) and (v["compound"] < 0.05):
                    print(f"{text}(SENTIMENTO NEUTRO)")


if __name__ == '__main__':
    #read_file('D:/Projects/web/Eloquent/public/python/frases.txt')
    hear_me()
