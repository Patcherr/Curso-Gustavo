### STRINGS ###

mi_string = "Esto es mi string"
mi_otro_string = "Esto es mi string"

# Se cuenta los caracteres de la cadena
print(len(mi_string))
print(len(mi_otro_string))

# Se puede agregar con el mas un espacio entre cadenas
print(mi_string + " " + mi_otro_string)

# Salto de linea
mi_nueva_linea = "Este es un string\ncon salto de linea"
print(mi_nueva_linea)

# Tabulación
mi_linea_tabulación = "\tEste es un string con tabulación"
print(mi_linea_tabulación)

# Tabulación con salto de linea
mi_escape_linea = "\tEste es un string\ncon salto de linea"
print(mi_escape_linea)

# Formateo

nombre, apellido, edad = "Jason", "Martins", 20

print("Mi nombre es {} {} y mi edad es {}".format(nombre,apellido,edad))

print("Mi nombre es %s %s y mi edad es %d" %(nombre,apellido,edad))

