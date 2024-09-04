from flask import Flask, request, jsonify
from flask_cors import CORS

# app instance
app = Flask(__name__)
CORS(app)

# /api/home
@app.route("/api/home", methods=['GET'])
def return_home():
    return jsonify({
        'message': "This is by Flask!",
        'tag': ['Flask', 'Nextjs', 'Cors']
    })


@app.route('/api/sum', methods=['POST'])
def sum_values():
    # Extract data from the request
    data = request.get_json()
    value1 = data.get('value1', 0)
    value2 = data.get('value2', 0)
    
    # Calculate the sum
    result = value1 + value2
    
    # Return the result as a JSON response
    return jsonify({'sum': result})


if __name__ == "__main__":
    app.run(debug=True, port=8080)