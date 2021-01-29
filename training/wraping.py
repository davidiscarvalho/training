#import examplemod
#from examplemod import do_a_thing, do_another_thing
from moddir.examplemod import *

#examplemod.do_a_thing()

#do_a_thing()


from colorama import Fore, Back, Style, init

init()

print(Fore.RED + 'some red text')
print(Back.GREEN + 'with a green background')
print(Style.DIM + 'and in dim text')
print(Style.RESET_ALL)
print('back to normal now')