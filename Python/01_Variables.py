### VARIABLES ###

# ¡Cuidado Asi NO es una buena practica!
MiVariable = "Mi string variable"
print(MiVariable)
# Esto SI es una buena practica
mi_string_variable = "Mi string variable"
print(mi_string_variable)

# Variable de enteros
mi_int_variable = 5
print(mi_int_variable)

# Variable Booleana (True o false)
mi_bool_variable = False
print(mi_bool_variable)

# Una impresion de varios datos en una cadena de texto
# Concatenacón de variables en un print
print(mi_string_variable,mi_int_variable , mi_bool_variable)

#Variable que es un entero
mi_int__to_str_variable = str(mi_int_variable)
print(mi_int__to_str_variable)

# Se transforma de un entero a un str(String)
# IMPORTANTE: No se puede usar mas como un numero 
print(type(mi_int__to_str_variable))


# Funciones del Sistema

# Funcion 'len'
# Cuenta los caracteres que tiene la variable
print(len(mi_string_variable))

# Concatenación de la variable con un texto
print("Este es el valor de: ", mi_bool_variable)

# Variables en una sola linea

# ¡Cuidado esto no es buena practica! 
nombre, apellido, alias, edad = "Jason", "Thompson", "JT", 19
print("Mi nombre y apellido es: ",nombre, apellido, "--Mi alias es: ", alias, "--Y mi edad: " ,edad)

# Esto es una buena practica
nombre2 = "Mick"
apellido2 = "Galher"
alias2 = "M.G"
edad2 = "25"
print("Mi nombre completo es: ", nombre2, apellido2)
print("Mi alias es: ", alias2)
print("Mi edad es: ", edad2)

# Imputs(Ingresar)
nombre3 = input("¿Cual es tu nombre?: ")
edad3 = input("¿Cuanto años tienes?: ")

print(nombre3)
print(edad3)

# Cambiamos su tipo de dato

# Cambiamos de un dato string a un entero
nombre = 19
# Cambiamos de un dato entero a un string
edad = "Jason"

# ¿Forzamos el tipo de dato?
dirección: str = "Mi dirección"
dirección: int = 32
print(dirección)


