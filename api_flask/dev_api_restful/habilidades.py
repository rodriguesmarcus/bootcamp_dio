from flask_restful import Resource

habilidades = ['python', 'java', 'flask', 'html']

class Habilidades(Resource):
    def get(self):
        return habilidades