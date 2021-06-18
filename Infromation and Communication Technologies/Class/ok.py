from selenium import webdriver
import time
from pynput.keyboard import Key,Controller
from threading import *

def run(url,no):
    keyboard = Controller()
    drivers = []
    for x in range(no):
        driver = webdriver.Chrome()
        driver.get(url)


        '''
        if x != 0:
            keyboard.press(Key.space)
            time.sleep(0.5)
            keyboard.release(Key.space)
            time.sleep(2)
        '''

        
        drivers.append(driver)
    return drivers

def core(url,no,delay):
    control = 5
    for _ in range(control):
        try:
            valid = run(url,no)
            time.sleep(delay)
            for x in valid:
                x.quit()
        except:
            core(url,no,delay)

class c1(Thread):
    def run(self):
        core(r"https://www.youtube.com/watch?v=7u09dhf553k",5,60)



class c2(Thread):
    def run(self):
        core(r"https://www.youtube.com/watch?v=7u09dhf553k",5,60)



class c3(Thread):
    def run(self):
        core(r"https://www.youtube.com/watch?v=7u09dhf553k",5,60)




o1 = c1()
o2 = c2()
o3 = c3()
o1.start()
o2.start()
o3.start()
