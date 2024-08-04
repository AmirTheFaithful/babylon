from flask import Blueprint, render_template

main_bp: Blueprint = Blueprint("pages", __name__)

@main_bp.route("/")
def home() -> str:
  return render_template("home.html")

@main_bp.route("/about")
def about() -> str:
  return render_template("about.html")