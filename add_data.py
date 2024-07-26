import firebase_admin
from firebase_admin import credentials, firestore
import json

# Initialiser l'application Firebase Admin SDK
cred = credentials.Certificate('api-key-devj2k.json')
firebase_admin.initialize_app(cred)

# Initialiser Firestore
db = firestore.client()

# Lire les données du fichier JSON
with open('about-data.json', 'r') as f:
    data = json.load(f)

# Fonction pour ajouter des données à Firestore
def add_data_to_firestore(collection_name, data):
    collection_ref = db.collection(collection_name)
    for doc_id, doc_data in data.items():
        collection_ref.document(doc_id).set(doc_data)
        print(f'Document {doc_id} ajouté avec succès.')

# Ajouter les données du fichier JSON à la collection 'about'
add_data_to_firestore('about', data)

print("Données ajoutées avec succès à Firestore.")
