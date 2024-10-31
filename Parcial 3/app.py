''''Desarrollar el diagrama de clases y el código en Python para un sistema que tenga las siguientes funciones:

    registrar un alumno, un administrativo, y una asignatura

    sumar asistencias a un alumno a una asignatura

    sumar inasistencias a un alumno a una asignatura

    mostrar en formato de tabla, el número de dni, apellido, nombre e email de todos los alumnos que están inscriptos en una asignatura (se debe poder indicar la asignatura mediante el código de asignatura'''
class Persona:
    def __init__(self, dni, nombre, apellido, telefono, email):
        self.dni = dni
        self.nombre = nombre
        self.apellido = apellido
        self.telefono = telefono
        self.email = email


class Alumno(Persona):
    def __init__(self, dni, nombre, apellido, telefono, email, legajo):
        super().__init__(dni, nombre, apellido, telefono, email)
        self.legajo = legajo
        self.asistencias = 0
        self.inasistencias = 0

    def sumar_asistencia(self):
        self.asistencias += 1

    def sumar_inasistencias(self):
        self.inasistencias += 1


class Administrativo(Persona):
    def __init__(self, dni, nombre, apellido, telefono, email):
        super().__init__(dni, nombre, apellido, telefono, email)


class Asignatura:
    def __init__(self, codigo, nombre, anio_plan):
        self.codigo = codigo
        self.nombre = nombre
        self.anio_plan = anio_plan
        self.alumnos_inscriptos = []

    def inscribir_alumno(self, alumno):
        self.alumnos_inscriptos.append(alumno)

    def mostrar_alumnos(self):
        print("DNI".ljust(12), "Apellido".ljust(15), "Nombre".ljust(15), "Email")
        print("-" * 60)
        for alumno in self.alumnos_inscriptos:
            print(
                f"{alumno.dni.ljust(12)} {alumno.apellido.ljust(15)} {alumno.nombre.ljust(15)} {alumno.email}"
            )


class Sistema:
    def __init__(self):
        self.alumnos = []
        self.administrativos = []
        self.asignaturas = []
        self.cargar_datos_iniciales()

    def cargar_datos_iniciales(self):

        alumno1 = Alumno("12345678", "Federico", "Mello", "123456789", "fedemello@mail.com", "0001")
        alumno2 = Alumno("87654321", "Marco", "Ruben", "987654321", "MarkitoRC@mail.com", "0002")
        alumno3 = Alumno("11223344", "Laura", "Hernandez", "112233445", "laurahernandez@mail.com", "0003")
        
        self.alumnos.extend([alumno1, alumno2, alumno3])

        administrativo1 = Administrativo("22334455", "Juan", "Pedro", "556677889", "juanpedro@mail.com")
        administrativo2 = Administrativo("33445566", "Marco", "Ruben", "667788990", "marcoruben@mail.com")
        
        self.administrativos.extend([administrativo1, administrativo2])

        asignatura1 = Asignatura("001", "Matemáticas", 2024)
        asignatura2 = Asignatura("002", "Física", 2022)
        
        self.asignaturas.extend([asignatura1, asignatura2])

        asignatura1.inscribir_alumno(alumno1)
        asignatura1.inscribir_alumno(alumno2)
        asignatura2.inscribir_alumno(alumno3)
        asignatura2.inscribir_alumno(alumno1)

    def buscar_alumno(self, dni):
        for alumno in self.alumnos:
            if alumno.dni == dni:
                return alumno
        return None

    def buscar_asignatura(self, codigo_asignatura):
        for asignatura in self.asignaturas:
            if asignatura.codigo == codigo_asignatura:
                return asignatura
        return None

    def sumar_asistencia(self):
        dni = input("Ingrese DNI del alumno: ")
        codigo_asignatura = input("Ingrese código de la asignatura: ")
        alumno = self.buscar_alumno(dni)
        asignatura = self.buscar_asignatura(codigo_asignatura)
        if alumno and asignatura and alumno in asignatura.alumnos_inscriptos:
            alumno.sumar_asistencia()
            print("Asistencia sumada correctamente.")
        else:
            print("Alumno o asignatura no encontrados, o alumno no inscrito en la asignatura.")

    def sumar_inasistencia(self):
        dni = input("Ingrese DNI del alumno: ")
        codigo_asignatura = input("Ingrese código de la asignatura: ")
        alumno = self.buscar_alumno(dni)
        asignatura = self.buscar_asignatura(codigo_asignatura)
        if alumno and asignatura and alumno in asignatura.alumnos_inscriptos:
            alumno.sumar_inasistencias()
            print("Inasistencia sumada correctamente.")
        else:
            print("Alumno o asignatura no encontrados, o alumno no inscrito en la asignatura.")

    def mostrar_alumnos_asignatura(self):
        codigo_asignatura = input("Ingrese código de la asignatura: ")
        asignatura = self.buscar_asignatura(codigo_asignatura)
        if asignatura:
            asignatura.mostrar_alumnos()
        else:
            print("Asignatura no encontrada.")

    def menu(self):
        while True:
            print("\n1. Sumar Asistencia a Alumno")
            print("2. Sumar Inasistencia a Alumno")
            print("3. Mostrar Alumnos de una Asignatura")
            print("4. Salir")
            opcion = input("Seleccione una opción: ")

            if opcion == "1":
                self.sumar_asistencia()
            elif opcion == "2":
                self.sumar_inasistencia()
            elif opcion == "3":
                self.mostrar_alumnos_asignatura()
            elif opcion == "4":
                print("Saliendo del sistema...")
                break
            else:
                print("Opción no válida, intente nuevamente.")


if __name__ == "__main__":
    sistema = Sistema()
    sistema.menu()

