from flask import Flask

# Import main web pages routes
from src.blueprints.pages import main_bp

def create_app() -> Flask:
  """ Initializes and returns a new instance of Flask.
      Implements application factory pattern.
  """
  app: Flask = Flask(__name__)

  # Register main web pages routes
  app.register_blueprint(main_bp)

  return app