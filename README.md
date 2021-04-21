# Cours Algorithmie et JavaScript

## Bases

### Exercice1 

    programme exercice1

       chaine1: chaine
       chaine2: chaine
    
    debut
         afficher "Veuillez rentrer la première chaine"
         saisir chaine1

         afficher "Veuillez rentrer la deuxième chaine"
         saisir chaine2

         si chaine1 > 2 * chaine2 alors
                afficher "La première chaine est deux fois plus grande que la deuxième"
         sinon
                afficher "La première chaine n'est pas deux fois plus grande que la deuxième"
         finsi
    fin

### Exercice2 

    programme exercice2

        nombre: entier
        total: entier

    debut
        afficher "Veuillez entrer un entier"
        saisir nombre

        pour i de 1 à nombre
            affecter à total : total + i
        finpour

### Exercice3 

    programme exercice3

        nombres[0..4] : entier
        indiceMax : entier
        nombreMax : entier
        total : entier
        moyenne : réel

    debut
         tantque taille(nombres) <= 5
                 afficher "Entrez un nombre : "
                 saisir nombres[]
         fintantque

         affecter à total : 0
         affecter à nombreMax : nombres[0]

         pour i de 0 à 4
             si nombres[i] > max alors
                affecter à max : nombres[i]
                affecter à indiceMax : i
             finsi

             affecter à total : total + nombres[i]
         finpour
   
         moyenne = total / 5

         afficher "Votre moyenne est : " str(moyenne)
    fin

## POO 

### Exercice1

    classe Hippopotamus(name, weight, tusksSize)

    debut
         fonction swim()
         debut
              affecter à weight : weight - 300
         fin

         fonction eat()
         debut
              affecter à weight : weight + 1000
         fin

         fonction fight(hippo2: Hippopotamus)
         debut
              si tusksSize > hippo2.tusksSize alors
                  afficher "Vous gagnez le combat"
              sinon
                  afficher "Votre adversaire gagne le combat"
              finsi
         fin

         fonction str()
         debut
             retourner "Name : " + str(this.name) + "weight : " + str(this.weight) + "tusksSize : " + str(this.tusksSize)
         fin

         fonction run()
         debut
             pour i de 1 à 3
                pour j de 1 à 7
                   pour k de 1 à 15
                       eat()
                       eat()
                       swim()
                       swim()
                       swim()

                       afficher this.str()
                   finpour
                finpour
              finpour
         fin

         programme exercice4
            h1: Hippopotamus
            h2: Hippopotamus
         debut
             affecter à h1: Hippopotamus("H1", 33.4, 10.6)
             affecter à h2: Hippopotamus("H2", 26.5, 8.4)

             si h1.fight(h2) alors
                  afficher "L'hippopotame " + h1.name + "a gagné."
             sinon
                  afficher "L'hippopotame " + h2.name + "a gagné."
             finsi

             h1.run()
         fin

### Exercice2

        class Point(private x, private y)
        debut 
            fonction getX()
            debut
                 retourner this.x
            fin

            fonction getY()
            debut
                 retourner this.y
            fin

            fonction setX()
            debut
                 affecter à this.x : x
            fin

            fonction setY(y)
            debut
                 affecter à this.y : y
            fin

            fonction str()
            debut
                 retourner "("  + str(this.x) + "," + str(this.y) + ")"
            fin
        fin

        programme exercice5
            p1: Point
        debut
            affecter à p1 : Point(5,6)
            afficher p1.str()
            p1.setX(8)
            afficher p1.str()
        fin

### Exercice3

        class Circle(private point1, private radius) {

            fonction area()
            debut
                retourner
            fin

            fonction containsPoint(point2)
            debut
                affecter à diffX : point.getX() - point2.getX();
                affecter à diffY : point.getY() - point2.getY();

                affecter à distance : sqrt((diffX * diffX) + (diffY * diffY))

                si distance <= radius et distance >= 0 
                     afficher "Le point est dans le cercle"
                sinon
                     afficher "Le point n'est pas dans le cercle"
                finsi
            fin
            
        }