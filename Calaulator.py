def main():
    Num1 = int(input('Number: '))
    FunctionToDo = input("Function: ")
    Num2 = int(input("Seconed Number: "))
    Res = ""
    if FunctionToDo == "*":
        Res = Num1 * Num2
    elif FunctionToDo == "/":
        Res = Num1/Num2
    elif FunctionToDo =="+":
        Res = Num1 + Num2
    elif FunctionToDo == "-":
        Res = Num1 - Num2
    
    print(f"{Num1} {FunctionToDo} {Num2} = {Res}")
    

main()