from flask import Flask
from flask_cors import CORS
from api.Proofread import proofread_bp

app = Flask(__name__)
CORS(app)

# Register Flask blueprints
app.register_blueprint(proofread_bp, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)