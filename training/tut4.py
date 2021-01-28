

game = [[2, 1, 1],
        [0, 2, 1],
        [1, 2, 1],]


def win(current_game):
    #horizontal
    for row in game:
        if row.count(row[0]) == len(row) and row[0] != 0:
            print(f"Player {row[0]} is the winner horizontally (-)")

    #diagonal
    diags = []
    for ix  in range(len(game)):
        diags.append(game[ix][ix])
    if diags.count(diags[0]) == len(diags) and diags[0] != 0:
            print(f"Player {diags[0]} is the winner diagonally (\\)")

    diags = []
    for col, row in enumerate(reversed(range(len(game)))):
        diags.append(game[row][col])
    if diags.count(diags[0]) == len(diags) and diags[0] != 0:
            print(f"Player {diags[0]} is the winner diagonally (/)")

    #vertical
    for col in range(len(game)):
        check = []

        for row in game:
            check.append(row[col])            
        if check.count(check[col]) == len(check) and check[col] != 0:
            print(f"Player {check[0]} is the winner vertically (|)")

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


play = True
players = [1,2]
while play:
    game = [[0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],]

    game_won = False
    game = game_board(game,just_display=True)
    while not game_won:
        current_player = 1
        column_choice = int(input("What column do you want to play?: "))
        row_choice = int(input("What row do you want to play?: "))
        game = game_board(game,current_player,row_choice,column_choice) 



game = game_board(game,just_display=True)
game = game_board(game,player=1,row=2,column=0)




'''      
for col, row in enumerate(reversed(range(len(game)))):
    print(col, row)

for col, row, in zip(reversed(range(len(game))), range(len(game))):
    print(col, row)
'''