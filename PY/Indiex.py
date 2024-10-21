'''class Persona:
  def __init__(self,nombre = None,edad = None):
    self.nombre = nombre
    self.edad = edad

  def set_nombre(self, nombre):
      self.nombre = nombre

  def set_edad(self, edad):
      self.edad = edad  

  def get_nombre(self):
        return self.nombre

  def get_edad(self):
        return self.edad
  
  def es_mayor_de_edad(self):
        return self.edad >= 18
  
  def es_mayor_que (self, otra_persona):
      return self.edad > otra_persona.get_edad()
  
  @staticmethod
  def get_mayor(persona1, persona2):
      if persona1.get_edad() > persona2.get_edad():
          return persona1
      else:
          return persona2
  
  def  print_persona(self):
    print(f"Nombre:{self.nombre}, Edad:{self.edad}, Mayor de edad:{self.es_mayor_de_edad()}")



persona1 = Persona()   
persona1.set_nombre("Federico")
persona1.set_edad(23)

persona2 = Persona("Camila", 17)


persona1.print_persona()

persona2.print_persona()

if persona1.es_mayor_que(persona2):
    print(f"{persona1.get_nombre()} es mayor que {persona2.get_nombre()}")
else:
    print(f"{persona1.get_nombre()} no es mayor que {persona2.get_nombre()}")


persona_mayor = Persona.get_mayor(persona1, persona2)
print(f"La persona de mayor edad es: {persona_mayor.get_nombre()}")
'''
class Alumno:
    def __init__(self, nombre, nota):
        self.nombre = nombre
        self.nota = nota

    def mostrar_datos(self):
        print(F"Nombre: {self.nombre},  Nota: {self.nota}, Estado: {self.evaluar_resultados()}")
    
    def evaluar_resultados(self):
        if self.nota >= 6:
          return "Aprobado"
        else:
          return "No aprobado"

alumno1 = Alumno("Federico", 9)
alumno2 = Alumno("Camila", 4)


alumno1.mostrar_datos()
alumno2.mostrar_datos()
