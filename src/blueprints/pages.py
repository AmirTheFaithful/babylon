from flask import Blueprint, render_template

main_bp: Blueprint = Blueprint("pages", __name__)

@main_bp.route("/")
def home() -> str:
  return render_template("home.html")

@main_bp.route("/contact-us")
def contact() -> str:
  return render_template("contact-us.html")

@main_bp.route("/about")
def about() -> str:
  return render_template("about.html")

@main_bp.route("/clt-tech")
def clt_tech() -> str:
  return render_template("clt_tech.html")

@main_bp.route("/stone-houses")
def stone_houses() -> str:
  return render_template("stone-houses.html")

@main_bp.route("/projects")
def projects() -> str:
  return render_template("projects.html")