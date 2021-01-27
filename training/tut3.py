game = [[0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],]


def game_board(game_map,player=0, row=0, column=0, just_display=False ):
    try:
        print("   0  1  2")
        if not just_display:
            game_map[row][column] = player
        for count, row in enumerate(game_map):
            print(count, row)
    except IndexError as e:
        print("Error: make sure you input row/column as 0 1 or 2?", e)
    
    except Exception as e:
        print("Somenting went very wrong!", e)
 
    return game_map


game = game_board(game,just_display=True)
game = game_board(game,player=1,row=2,column=0)


  
'''
def addition(x,y):
    return x+y

print(addition(5,3))

'''