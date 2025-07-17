from flask import Blueprint, request, jsonify

GrammarBlueprint = Blueprint('Grammar', __name__)

@GrammarBlueprint.route('/proofread', methods=['POST'])
def Proofread():
    """
    This endpoint receives text from the frontend, processes it for grammatical
    errors, and returns a list of suggestions.
    """
    if not request.json or not 'text' in request.json:
        return jsonify({'error': 'Missing text in request'}), 400

    text_to_check = request.json['text']

    # In a real application, you would integrate a grammar-checking library
    # or service here (e.g., LanguageTool, Ginger, etc.).
    # For this example, we'll return a mock response.
    
    # Mocked errors and suggestions
    suggestions = [
        {
            'original': 'This is a testt.',
            'suggestion': 'This is a test.',
            'type': 'spelling'
        },
        {
            'original': 'they is going to the store.',
            'suggestion': 'they are going to the store.',
            'type': 'grammar'
        }
    ]

    return jsonify({'suggestions': suggestions}) 