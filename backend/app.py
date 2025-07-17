from flask import Flask
from api.Grammar import GrammarBlueprint

app = Flask(__name__)

# Register the blueprint
app.register_blueprint(GrammarBlueprint, url_prefix='/api')

@app.route('/')
def index():
    return 'Hello, from OmniOffice Backend!'

if __name__ == '__main__':
    app.run(debug=True) 