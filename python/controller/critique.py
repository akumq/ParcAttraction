import request.request as req


def get_all_critique(attraction_id):
    if (not attraction_id):
        return False
    json = req.select_from_db("SELECT * FROM critique WHERE attraction_id = ?", (attraction_id,))
    return json

def add_critique(id,data):
    print(data, flush=True)
    if (not "name" in data or data["name"] == ""):
        return False
    
    if (not "text" in data or data["text"] == ""):
        return False
      
    if (not "surname" in data or data["surname"] == ""):
        return False

    if (not "score" in data or data["score"] is None):
        return False

    if (not "attraction_id" in data or data["attraction_id"] is None):
        return False

    requete = "INSERT INTO critique (name, text, surname, score, attraction_id) VALUES (?, ?, ?, ?, ?);"
    id = req.insert_in_db(requete, (data["name"], data["text"], data["surname"], data["score"], data["attraction_id"]))

    return id