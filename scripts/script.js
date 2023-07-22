const languageURL = 'https://student2.cs.appstate.edu/swansonja/project/data_language.php';
const projectURL = 'https://student2.cs.appstate.edu/swansonja/project/data_projects.php';
const studyAbroadURL = 'https://student2.cs.appstate.edu/swansonja/project/data_study_abroad.php';

const language = ["First Name", "Last Name", "Language", "Level of Proficiency", "Email", "Website"];

const project = ["First Name", "Last Name", "Department", "College", "Country", "Travelled (Y/N)", "Project Description"];

const study = ["Term", "Program Name", "Country", "College", "Department", "Dates", "Level", "Credits", "Availability"]

$(function start() {
  setFormLanguage(languageURL);
  setTable(languageURL, "Search by Language", "language", language);
  setFormProject(projectURL);
  setProjectTable(projectURL, "Search by Project", "project");
  setFormStudy(studyAbroadURL);
  setTable(studyAbroadURL, "Study Abroad Opportunities", "study_abroad", study);
  buttons();
});

//***********************************************
//FUNCTION setTable
//Create a table from a given jasonp URL
//data source.
//parameters:
// url - The URL of the jasonp file
// caption - The caption for the table.
// divId - The id of the div to put the table.
//***********************************************
function setFormLanguage(url) {
  $.ajax({
    url: url,
    dataType: 'jsonp',
    success: function(data) {
      let language = ["None"];
      let prof = [];
      makeListForLanguage(data, language, prof);
      let lan = [...new Set(language)];
      let pr = [...new Set(prof)];
      pr.reverse();
      [pr[1], pr[2]] = [pr[2], pr[1]];
      lan.pop();
      addFormLanguage("forml", lan, pr);
    }
  })
}

function setFormProject(url) {
  $.ajax({
    url: url,
    dataType: 'jsonp',
    success: function(data) {
      let lastname = ["None"];
      let acaCollege = ["None"];
      let acaDepartment = ["None"];
      let country = ["None"]
      makeListForProject(data, lastname, acaCollege, acaDepartment, country);
      let last = [...new Set(lastname)];
      let college = [...new Set(acaCollege)];
      college.pop();
      let department = [...new Set(acaDepartment)];
      department.splice(17, 1);
      let count = [...new Set(country)];
      count.splice(70, 1);
      addFormProject("formp", last, college, department, count);
    }
  })
}

function setFormStudy(url) {
  $.ajax({
    url: url,
    dataType: 'jsonp',
    success: function(data) {
      let term = ["None"];
      let projectName = ["None"];
      let country = ["None"]
      let dates = ["None"];
      makeListForStudy(data, term, projectName, country, dates);
      let t = [...new Set(term)];
      let project = [...new Set(projectName)];
      console.log(project);
      let c = [...new Set(country)];
      let d = [...new Set(dates)];
      addFormStudy("forms", t, project, c, d);
    }
  })
}

function makeListForStudy(data, term, name, country, dates) {
  for (let i = 0; i < data.length; i++) {
    term.push(data[i].Term);
    name.push(data[i].ProgramName);
    country.push(data[i].Countries);
    dates.push(data[i].Dates);
  }
}

function makeListForProject(data, lastname, acaCollege, acaDepartment, country) {
  for (let i = 0; i < data.length; i++) {
    lastname.push(data[i].Lastname);
    acaCollege.push(data[i].AcademicCollege);
    acaDepartment.push(data[i].AcademicDepartment);
    country.push(data[i].Country);
  }
}

function makeListForLanguage(data, language, prof) {
  for (let i = 0; i < data.length; i++) {
    language.push(data[i].Language);
    prof.push(data[i].Proficiency);
  }
}

function buttons() {
  let buttons = $('button');
  let select = document.getElementsByTagName('select');
  buttons[0].addEventListener('click', function() { getLanguage(languageURL, select[0].value, select[1].value) }, false);
  
  buttons[1].addEventListener('click', function() {getProject(projectURL, select[2].value, select[3].value, select[4].value, select[5].value)}, false);

  buttons[2].addEventListener('click', function() { getStudy(studyAbroadURL, select[6].value, select[7].value, select[8].value, select[9].value) }, false);
  
}

function getProject(url, name, college, department, country) {
  $.ajax({
    url: url,
    dataType: 'jsonp',
    success: function(data) {
      let f1 = data.filter(
        function(obj) {
          if (name == "None") {
            return obj;
          } else if(name == "Beyer") {
            return name == obj.Lastname;
          } else if(name == "Killian") {
            return name == obj.Lastname;
          } else if(name == "Friedman") {
            return (name + " ") == obj.Lastname;
          } else if(name == "Morrow") {
            return name == obj.Lastname;
          } else {
            return (" " + name) == obj.Lastname;
          }
        }
      );

      let f2 = f1.filter(
        function(obj) {
          if (college == "None") {
            return obj;
          } else {
            return college == obj.AcademicCollege;
          }
        }
      );

      let f3 = f2.filter(
        function(obj) {
          if (department == "None") {
            return obj;
          } else {
            return department == obj.AcademicDepartment;
          }
        }
      );

      let f4 = f3.filter(
        function(obj) {
          if (country == "None") {
            return obj;
          } else {
            return country == obj.Country;
          }
        }
      );
      const table = getProjectTable("Search by Project", f4, project);
      $("#project").html(table);
    }
  });
}

function getProjectTable(caption, data, list) {
  let table = "<table>\n";
  table += `<caption>${caption}</caption>`
  table += "<tr>\n";
  for (let i = 0; i < list.length; i++) {
    table += `<th>${list[i]}</th>\n`
  }
  table += "</tr>\n"
  for (let i = 0; i < data.length; i++) {
    table += "<tr>\n";
    table += `<td>${data[i].Firstname}</td>\n`;
    table += `<td>${data[i].Lastname}</td>\n`;
    table += `<td>${data[i].AcademicDepartment}</td>\n`;
    table += `<td>${data[i].AcademicCollege}</td>\n`;
    table += `<td>${data[i].Country}</td>\n`;
    table += `<td>${data[i].Travelled}</td>\n`;
    table += `<td>${data[i].Country} - ${data[i].Collaboration} - ${data[i].Location}</td>\n`;
    table += "</tr>\n";
  }

  table += "</table>"
  return table;
}

function getStudy(url, term, project, country, dates) {
  $.ajax({
    url: url,
    dataType: 'jsonp',
    success: function(data) {
      let f1 = data.filter(
        function(obj) {
          if (term == "None") {
            return obj;
          } else {
            return term == obj.Term;
          }
        }
      );
      
      let f2 = f1.filter(
        function(obj) {
          if (project == "None") {
            return obj;
          } else {
            return (project + " ") == obj.ProgramName;
          }
        }
      );

      let f3 = f2.filter(
        function(obj) {
          if (country == "None") {
            return obj;
          } else {
            return country == obj.Countries;
          }
        }
      );

      let f4 = f3.filter(
        function(obj) {
          if (dates == "None") {
            return obj;
          } else {
            return dates == obj.Dates;
          }
        }
      );
      const table = getStudyTable("Study Abroad Opportunities", f4, study);
      $("#study_abroad").html(table);
    }
  });

}

function getStudyTable(caption, data, list) {
  let table = "<table>\n";
  table += `<caption>${caption}</caption>`
  table += "<tr>\n";
  for (let i = 0; i < list.length; i++) {
    table += `<th>${list[i]}</th>\n`
  }
  table += "</tr>\n"
  for (let i = 0; i < data.length; i++) {
    table += "<tr>\n";
    table += `<td>${data[i].Term}</td>\n`;
    table += `<td>${data[i].ProgramName}</td>\n`;
    table += `<td>${data[i].Countries}</td>\n`;
    table += `<td>${data[i].College}</td>\n`;
    table += `<td>${data[i].Department}</td>\n`;
    table += `<td>${data[i].Dates}</td>\n`;
    table += `<td>${data[i].Level}</td>\n`;
    table += `<td>${data[i].Credits}</td>\n`;
    table += `<td>${data[i].Availability}</td>\n`;
    table += "</tr>\n"
  }

  table += "</table>"
  return table;
}

function getLanguage(url, lang, prof) {
  $.ajax({
    url: url,
    dataType: 'jsonp',
    success: function(data) {
      let f1 = data.filter(
        function(obj) {
          if (lang == "None") {
            return obj;
          } else {
            return lang == obj.Language;
          }
        }
      );
      let f2 = f1.filter(
        function(obj) {
          if (prof == "high") {
            return prof == obj.Proficiency
          } else if (prof == "med") {
            return "low" != obj.Proficiency
          } else {
            return obj;
          }
        }
      );
      const table = getLanguageTable("Mentors by Language", f2, language);
      $("#language").html(table);
    }
  });

}

function getLanguageTable(caption, data, list) {
  let table = "<table>\n";
  table += `<caption>${caption}</caption>`
  table += "<tr>\n";
  for (let i = 0; i < list.length; i++) {
    table += `<th>${list[i]}</th>\n`
  }
  table += "</tr>\n"
  for (let i = 0; i < data.length; i++) {
    table += "<tr>\n";
    table += `<td>${data[i].Firstname}</td>\n`;
    table += `<td>${data[i].Lastname}</td>\n`;
    table += `<td>${data[i].Language}</td>\n`;
    table += `<td>${data[i].Proficiency}</td>\n`;
    table += `<td>${data[i].Email}</td>\n`;
    table += `<td>${data[i].WebPage}</td>\n`;
    table += "</tr>\n"
  }

  table += "</table>"
  return table;
}

function setTable(url, caption, divId, list) {
  $.ajax({
    url: url,
    dataType: 'jsonp',
    success: function(data) {
      addTable(caption, divId, data, list);
    }
  });
}

function setProjectTable(url, caption, divId) {
  $.ajax({
    url: url,
    dataType: 'jsonp',
    success: function(data) {
      projectTable(data, caption, divId);
    }
  });
}

function addFormLanguage(divId, language, prof) {
  let form = document.createElement('form');
  let label1 = document.createElement('label');
  label1.textContent = "Choose a Language: ";
  form.appendChild(label1);

  let select1 = document.createElement('select');
  addOption(select1, language);
  form.appendChild(select1);

  let label2 = document.createElement('label');
  label2.textContent = "Choose a level of  roficiency: ";
  form.appendChild(label2);

  let select2 = document.createElement('select');
  addOption(select2, prof);
  form.appendChild(select2);

  document.getElementById(divId).appendChild(form);
}

function addFormProject(divId, lastname, academicCollege, academicDepartment, country) {
  let form = document.createElement('form');
  let label1 = document.createElement('label');
  label1.textContent = "Choose a Last Name: "
  form.appendChild(label1);

  let select1 = document.createElement('select');
  addOption(select1, lastname);
  form.appendChild(select1);

  let label2 = document.createElement('label');
  label2.textContent = "Choose an Academic College: "
  form.appendChild(label2);

  let select2 = document.createElement('select');
  addOption(select2, academicCollege);
  form.appendChild(select2);

  let label3 = document.createElement('label');
  label3.textContent = "Choose an Academic Department: ";
  form.appendChild(label3);

  let select3 = document.createElement('select');
  addOption(select3, academicDepartment);
  form.appendChild(select3);

  let label4 = document.createElement('label');
  label4.textContent = "Choose a Country: "
  form.appendChild(label4);

  let select4 = document.createElement('select');
  addOption(select4, country);
  form.appendChild(select4);

  document.getElementById(divId).appendChild(form);
}

function addFormStudy(divId, term, programName, country, dates) {
  let form = document.createElement('form');
  let label1 = document.createElement('label');
  label1.textContent = "Choose a Term: "
  form.appendChild(label1);

  let select1 = document.createElement('select');
  addOption(select1, term);
  form.appendChild(select1);

  let label2 = document.createElement('label');
  label2.textContent = "Choose a Program Name: "
  form.appendChild(label2);

  let select2 = document.createElement('select');
  addOption(select2, programName);
  form.appendChild(select2);

  let label3 = document.createElement('label');
  label3.textContent = "Choose a Country: "
  form.appendChild(label3);

  let select3 = document.createElement('select');
  addOption(select3, country);
  form.appendChild(select3);

  let label4 = document.createElement('label');
  label4.textContent = "Choose a Dates: "
  form.appendChild(label4);

  let select4 = document.createElement('select');
  addOption(select4, dates);
  form.appendChild(select4);

  document.getElementById(divId).appendChild(form);
}

function addOption(select, array) {
  for (let i = 0; i < array.length; i++) {
    let option = document.createElement('option');
    option.textContent = array[i];
    select.appendChild(option);
  }
}

function projectTable(data, caption, divId) {
  let table = "<table>\n"
  table += "<tr><th>First Name</th><th>Last Name</th><th>Department</th><th>College</th><th>Country</th><th>Travelled (Y/N)</th><th>Project Description</th></tr>\n"
  table += `<caption>${caption}</caption>\n`;
  for (let i = 0; i < data.length; i++) {
    table += "<tr>\n";
    table += `<td>${data[i].Firstname}</td>\n`;
    table += `<td>${data[i].Lastname}</td>\n`;
    table += `<td>${data[i].AcademicDepartment}</td>\n`;
    table += `<td>${data[i].AcademicCollege}</td>\n`;
    table += `<td>${data[i].Country}</td>\n`;
    table += `<td>${data[i].Travelled}</td>\n`;
    table += `<td>${data[i].Country} - ${data[i].Collaboration} - ${data[i].Location}</td>\n`;
    table += "</tr>\n";
  }

  table += "<table>\n";
  let ele = document.getElementById(divId);
  ele.innerHTML = table;
}

function addTable(caption_text, divId, data, list) {
  let table = document.createElement('table');
  addHeading(table, list)
  let caption = document.createElement('caption');
  caption.textContent = caption_text;
  table.appendChild(caption);
  for (let obj of data) {
    addRow(table, obj);
  }
  $(`#${divId}`).html(table);
}

function addHeading(table, list) {
  let row = document.createElement('tr');
  for (let head in list) {
    let cell = document.createElement('th');
    cell.textContent = list[head];
    row.appendChild(cell);
  }
  table.appendChild(row);
}

function addRow(table, obj) {
  let row = document.createElement('tr');
  for (let field in obj) {
    let cell = document.createElement('td');
    cell.textContent = obj[field];
    row.appendChild(cell);
  }
  table.appendChild(row);
}