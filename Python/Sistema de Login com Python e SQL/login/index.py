from tkinter import *
from tkinter import messagebox
from tkinter import ttk
from turtle import right, width
import database

#Criação janela

jan = Tk()
jan.title('Do Systems - Acess Panel')
jan.geometry("600x300")
jan.configure(background="white")
jan.resizable(width=False, height=False)
#jan.attributes("-alpha", 1.0) deixar transparente.
jan.iconbitmap(default="img/LogoIcon.ico")

#carrega imagem

logo = PhotoImage(file="img/logo.png")

#Widgets
LeftFrame = Frame(jan, width=200, height=300, bg="MIDNIGHTBLUE", relief="raise")
LeftFrame.pack(side=LEFT)

RigthFrame = Frame(jan, width=395, height=300, bg="MIDNIGHTBLUE", relief="raise")
RigthFrame.pack(side=RIGHT)

LogoLabel = Label(LeftFrame, image=logo, bg="MIDNIGHTBLUE")
LogoLabel.place(x=50, y=100)

UserLabel = Label(RigthFrame, text="Username:", font=("Century Gothic", 20), bg="MIDNIGHTBLUE", fg="White")
UserLabel.place(x=5, y=100)

UserEntry = ttk.Entry(RigthFrame, width=30)
UserEntry.place(x=149, y=110)

PassLabel = Label(RigthFrame, text="Password:", font=("Century Gothic", 20), bg="MIDNIGHTBLUE", fg="White")
PassLabel.place(x=5 , y=150)

PassEntry = ttk.Entry(RigthFrame, width=30, show="*")
PassEntry.place(x=150, y=160)

def Login():
    User = UserEntry.get()
    Pass = PassEntry.get()

    database.cursor.execute("""
    SELECT * FROM Users
    WHERE User = ? AND Password = ?
    """, (User, Pass))
    print("Logado!")
    VerifyLogin = database.cursor.fetchone()
    try:
        if User in VerifyLogin and Pass in VerifyLogin:
            messagebox.showinfo(title="Login info", message="Acesso Confirmado!")
    except:
            messagebox.showinfo(title="Login info", message="ACESSO NEGADO! Por favor verifique as usuario ou senha.")


#Botões

LoginButton = ttk.Button(RigthFrame, text="Login", width=30, command=Login)
LoginButton.place(x=125, y=225)

def Register():
    #Remove Widgets de logins
    LoginButton.place(x=5000)
    RegisterButton.place(x=5000)
    #Inserindo Wigets de logins
    NomeLabel = Label(RigthFrame, text="Name:", font=("Century Gothic", 20), bg="MIDNIGHTBLUE", fg="white")
    NomeLabel.place(x=5, y=5)

    NomeEntry = Entry(RigthFrame, width=30)
    NomeEntry.place(x=101, y=18)

    EmailLabel = Label(RigthFrame, text="Email:", font=("Century Gothic", 20), bg="MIDNIGHTBLUE", fg="white")
    EmailLabel.place(x=5, y=55)

    EmailEntry = Entry(RigthFrame, width=30)
    EmailEntry.place(x=100, y=66)

    #Trabalhando com registro de dados
    def RegisterToDataBase():
        Name = NomeEntry.get()
        Email = EmailEntry.get()
        User = UserEntry.get()
        Pass = PassEntry.get()

        if Name == "" and Email == "" and User == "" and Pass == "":
            messagebox.showerror(title="Register Error", message="Preencha todos os campos!")
        else:
            database.cursor.execute("""
            INSERT INTO Users(Name, Email, User, Password) VALUES(?, ?, ?, ?)
        """, (Name, Email, User, Pass))
        
            database.cursor.connection.commit()
            messagebox.showinfo(title="Register Info", message="Rigistrado com sucesso!")


    Register = ttk.Button(RigthFrame, text="Register", width=20, command=RegisterToDataBase)
    Register.place(x=125, y=225)

    def BackToLogin():
        #Remove de cadastro
        NomeLabel.place(x=5000)
        NomeEntry.place(x=5000)
        EmailLabel.place(x=5000)
        EmailEntry.place(x=5000)
        Register.place(x=5000)
        Back.place(x=5000)
        #Show botão
        LoginButton.place(x=100)
        RegisterButton.place(x=100)
        
    
    Back = ttk.Button(RigthFrame, text="Back", width=20, command=BackToLogin)
    Back.place(x=125, y=260)



RegisterButton = ttk.Button(RigthFrame, text="Register", width=30, command=Register)
RegisterButton.place(x=125, y=260)

jan.mainloop()

