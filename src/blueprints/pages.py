from flask import Blueprint, render_template

main_bp: Blueprint = Blueprint("pages", __name__)

# Helper function that just returns 
# ready torender projects as dicts
def get_projects() -> dict:
  from json import loads

  # Fetch objects from the data file
  with open("src/blueprints/projects.json") as file:
    file_contents = file.read()

  # Transform JSON objects to Python dicts
  projects = loads(file_contents)

  return projects

@main_bp.route("/")
def home() -> str:
  return render_template("home.html")

@main_bp.route("/contact")
def contact() -> str:
  return render_template("contact.html")

@main_bp.route("/about")
def about() -> str:
  return render_template("about.html")

@main_bp.route("/clt-tech")
def clt_tech() -> str:
  return render_template("clt-tech.html")

@main_bp.route("/stone-houses")
def stone_houses() -> str:
  return render_template("stone-houses.html")

@main_bp.route("/projects")
def projects() -> str:
  return render_template("projects.html", projects=get_projects())

@main_bp.route("/projects/<project_id>")
def project(project_id: str) -> str:
  projects: dict = get_projects()

  # Find requested project to render
  index = int(project_id) - 1
  # print(int(project_id))
  proj = projects[index]

  # First, find the project by it's provided ID
  return render_template("project.html", project=proj)