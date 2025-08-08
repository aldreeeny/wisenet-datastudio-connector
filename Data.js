// https://developers.google.com/datastudio/connector/reference#getdata
function getData(request) {

    var endpoint = request.configParams.endpoint;
    var apiKey = request.configParams.apiKey;
    var requestedFieldIds = request.fields.map(function(field) {
      return field.name;
    });
    
    var requestedFields = getFields(request).forIds(requestedFieldIds);
  
  
  
  try {
    var apiResponse = fetchDataFromApi(request, endpoint, apiKey);
    var data = parseData(apiResponse, requestedFields, endpoint);
  } catch (e) {
    cc.newUserError()
      .setDebugText('Error fetching data from API. Exception details: ' + e)
      .setText(
        'The connector has encountered an unrecoverable error. Please try again later, or file an issue if this error persists. asdasdd'+ e
      )
      .throwException();
  }

  return {
    schema: requestedFields.build(),
    rows: data
  };
}

/**
 * Gets response for UrlFetchApp.
 *
 * @param {Object} request Data request parameters.
 * @returns {string} Response text for UrlFetchApp.
 */
function fetchDataFromApi(request, endpoint, apiKey) {
  var baseUrl = "https://api.wisenet.co/v1/";
  var url = "";
  switch(endpoint) {
    case "Agents": url = baseUrl+"agents"; break;
    case "Assessors": url = baseUrl+"assessors"; break;
    case "AuditLogs": url = baseUrl+"audit-logs"; break;
    case "Checklists": url = baseUrl+"checklists"; break;
    case "Checklistitems": url = baseUrl+"checklist-items"; break;
    case "Coordinators": url = baseUrl+"coordinators"; break;
    case "CourseEnrollments": url = baseUrl+"course-enrolments"; break;
    case "CourseEnrollmentsCurrent": url = baseUrl+"course-enrolments"; break;
    case "CourseOffers": url = baseUrl+"course-offers"; break;
    case "Entities": url = baseUrl+"entities"; break;
    case "Filenote": url = baseUrl+"filenotes"; break;
    case "LearnerAu": url = baseUrl+"learnersAU"; break;
    case "LearnerNz": url = baseUrl+"learnersNZ"; break;
    case "LearnerSg": url = baseUrl+"learnersSG"; break;
    case "LearnerPosition": url = baseUrl+"learner-positions"; break;
    case "Opportunity": url = baseUrl+"opportunities"; break;
    case "Promotions": url = baseUrl+"promotions"; break;
    case "SalesContacts": url = baseUrl+"sales-contacts"; break;
    case "SalesPersons": url = baseUrl+"sales-persons"; break;
    case "Trainers": url = baseUrl+"trainers"; break;
    case "UnitOffers": url = baseUrl+"unit-offers"; break;
    case "UnitEnrollments": url = baseUrl+"unit-enrolments"; break;
    case "Workplaces": url = baseUrl+"workplaces"; break;
  }
  var params = {
    headers : {
      "x-api-key" : apiKey
    }
  };
  var response = UrlFetchApp.fetch(url, params);
  var parsed = JSON.parse(response.getContentText());
  var bool = false;
  if(parsed.length == 1000) {
    console.log("1000");
    bool = true;
  }
  var skip = 1;
  while(bool) {
    var newurl =url+"?skip="+(skip*1000)+"&take=1000";
    var res = UrlFetchApp.fetch(url, params);
    var parsedRes = JSON.parse(response.getContentText());
    parsedRes.map(function(row) {
      parsed.push(row);
    });
    if(parsedRes.length < 1000) {
      bool = false;
    }
    skip++;
  }

  return parsed;
}
/**
 * Formats the parsed response from external data source into correct tabular
 * format and returns only the requestedFields
 *
 * @param {Object} parsedResponse The response string from external data source
 *     parsed into an object in a standard format.
 * @param {Array} requestedFields The fields requested in the getData request.
 * @returns {Array} Array containing rows of data in key-value pairs for each
 *     field.
 */
function parseData(apiResponse, requestedFields, endpoint) {
  var values = [];
  if(endpoint == "Agents") {
    values = apiResponse.map(function(info) {
      var data = info.Data;
      var joins = info.Relationships;
      var row = [];
      requestedFields.asArray().forEach(function(field) {
        switch (field.getId()) {
          case "name":
            return row.push(data.Name);
          case "code":
            return row.push(data.Code);
          case "email":
            return row.push(data.Email);
          case "mobile":
            return row.push(data.Mobile);
          case "phone":
            return row.push(data.Phone);
          case "fax":
            return row.push(data.Fax);
          case "website":
            return row.push(data.Website);
          case "businessNumber":
            return row.push(data.BusinessNumber);
          case "address":
            return row.push(data.StreetAddress.AddressLine1+" "+data.StreetAddress.AddressLine2+", "+data.StreetAddress.Suburb+", "+data.StreetAddress.City);
          default:
            return row.push("");
        }
      });
      return { values: row };
    });
  } else if(endpoint == "Assessors") {
    values = apiResponse.map(function(info) {
      var data = info.Data;
      var joins = info.Relationships;
      var row = [];
      requestedFields.asArray().forEach(function(field) {
        switch (field.getId()) {
          case "firstname":
             row.push(data.FirstName); break;
          case "lastname":
             row.push(data.LastName); break;
          case "activeFlag":
             row.push(data.IsActive); break;
          default:
             row.push("");
        }
      });
      return { values: row };
    });
  } else if(endpoint == "AuditLogs") {
    values = apiResponse.map(function(info) {
      var data = info.Data;
      var joins = info.Relationships;
      var row = [];
      requestedFields.asArray().forEach(function(field) {
        switch (field.getId()) {
          case "recordID":
            return row.push(+data.RecordId);
          case "entityName":
            return row.push(data.EntityName);
          case "auditAction":
            return row.push(data.AuditAction);
          case "timestamp":
            if(data.LastModifiedTimeStamp!=null) {
              var hold = data.LastModifiedTimeStamp;
              if(hold.length == 22) { hold += "0";}
              if(hold.length == 21) { hold += "00";}
              var date = new Date(hold);
              return row.push(Utilities.formatDate(date, "GMT+0800", "YYYYMMdd"));
            } else { return row.push(""); }
          default:
            return row.push("");
        }
      });
      return { values: row };
    });
  } else if(endpoint == "Checklists") {
    values = apiResponse.map(function(info) {
      var data = info.Data;
      var joins = info.Relationships;
      var row = [];
      requestedFields.asArray().forEach(function(field) {
        switch (field.getId()) {
          case "entityName":
            return row.push(data.EntityName);
          case "dateDue":
            var hold = data.DateDue;
            return row.push(hold.slice(0,10));
          case "dateCompleted":
            var hold = data.DateCompleted;
            return row.push(hold.slice(0,10));
          case "completedFlag":
            return row.push(data.CompletedFlag);
          case "staffName":
            return row.push(data.StaffName);
          case "notes":
            return row.push(data.Notes);
          case "amount":
            return row.push(data.Amount);
          case "taxExemptFlag":
            return row.push(data.TaxExemptFlag);
          case "timestamp":
            if(data.LastModifiedTimeStamp!=null) {
              var hold = data.LastModifiedTimeStamp;
              return row.push(hold.slice(0,10));
            } else { return row.push(""); }
          default:
            return row.push("");
        }
      });
      return { values: row };
    });
  } else if(endpoint == "Checklistitems") {
    values = apiResponse.map(function(info) {
      var data = info.Data;
      var joins = info.Relationships;
      var row = [];
      requestedFields.asArray().forEach(function(field) {
        switch (field.getId()) {
          case "entityName":
            return row.push(data.EntityName);
          case "type":
            return row.push(data.Type);
          case "description":
            return row.push(data.Description);
          case "activeFlag":
            return row.push(data.IsActive);
          case "timestamp":
            if(data.LastModifiedTimeStamp!=null) {
              var hold = data.LastModifiedTimeStamp;
              return row.push(hold.slice(0,10));
            } else { return row.push(""); }
          default:
            return row.push("");
        }
      });
      return { values: row };
    });
  } else if(endpoint == "CourseEnrollments") {
    values = apiResponse.map(function(info) {
      var data = info.Data;
      var joins = info.Relationships;
      var row = [];
      requestedFields.asArray().forEach(function(field) {
        switch (field.getId()) {
          case "courseEnrolmentId":
            var hold = +data.CourseEnrolmentId;
            return row.push(hold);
          case "name":
            return row.push(joins.Learner.FirstName+" "+joins.Learner.LastName);
          case "learnerNum":
            return row.push(joins.Learner.LearnerNumber);
          case "email":
            return row.push(joins.Learner.Email);
          case "courseOfferDescription":
            return row.push(joins.CourseOffer.Description);
          case "courseOfferCode":
            return row.push(joins.CourseOffer.Code);
          case "startDate":
            if(data.StartDate!=null) {
              var hold = data.StartDate;
              if(hold.length == 22) { hold += "0";}
              if(hold.length == 21) { hold += "00";}
              var date = new Date(hold);
              return row.push(Utilities.formatDate(date, "GMT+0800", "YYYYMMdd"));
            } else { return row.push(""); }
          case "endDate":
            var hold = data.EndDate;
            if(data.EndDate!=null) {
              var hold = data.EndDate;
              if(hold.length == 22) { hold += "0";}
              if(hold.length == 21) { hold += "00";}
              var date = new Date(hold);
              return row.push(Utilities.formatDate(date, "GMT+0800", "YYYYMMdd"));
            } else { return row.push(""); }
          case "enrolmentStatus":
            return row.push(joins.EnrolmentStatus.Description);
          case "EnrolmentStatusReason":
            var hold = "";
            if(joins.EnrolmentStatusReason != undefined) {
              hold = joins.EnrolmentStatusReason.Description;
            }
            return row.push(hold);
          case "studyMode":
            var hold = "";
            if(joins.StudyMode != undefined) {
              hold = joins.StudyMode.Description;
            }
            return row.push(hold);
          default:
            return row.push("");
        }
      });
      return { values: row };
    });
  } else if(endpoint == "Coordinators") {
    values = apiResponse.map(function(info) {
      var data = info.Data;
      var joins = info.Relationships;
      var row = [];
      requestedFields.asArray().forEach(function(field) {
        switch (field.getId()) {
          case "firstname":
            return row.push(data.FirstName);
          case "lastname":
            return row.push(data.LastName);
          case "activeFlag":
            return row.push(data.IsActive);
          default:
            return row.push("");
        }
      });
      return { values: row };
    });
  } else if(endpoint == "CourseOffers") {
    values = apiResponse.map(function(info) {
      var data = info.Data;
      var joins = info.Relationships;
      console.log(joins);
      var row = [];
      requestedFields.asArray().forEach(function(field) {
        switch (field.getId()) {
          case "learner":
            return row.push(joins.Learner.FirstName+" "+joins.Learner.LastName);
          case "assessor":
            return row.push(joins.Assessor.FirstName+" "+joins.Assessor.LastName);
          case "studentNumber":
            return row.push(data.StudentNumber);
          case "startDate":
            if(data.StartDate!=null) {
              var hold = data.StartDate;
              return row.push(hold.slice(0,10));
            } else { return row.push(""); }
          case "endDate":
            if(data.EndDate!=null) {
              var hold = data.EndDate;
              return row.push(hold.slice(0,10));
            } else { return row.push(""); }
          case "mainSubject":
            return row.push(joins.MainSubject1.Code+"-"+joins.MainSubject1.Description);
          case "venue":
            return row.push(joins.Venue.Description);
          case "notes":
            return row.push(data.GeneralNotes);
         case "timestamp":
            if(data.LastModifiedTimeStamp!=null) {
              var hold = data.LastModifiedTimeStamp;
              return row.push(hold.slice(0,10));
            } else { return row.push(""); }
          default:
            return row.push("");
        }
      });
      return { values: row };
    });
  } else if(endpoint == "Entities") {
    values = apiResponse.map(function(info) {
      var data = info.Data;
      var joins = info.Relationships;
      var row = [];
      requestedFields.asArray().forEach(function(field) {
        switch (field.getId()) {
          case "entityName":
            return row.push(data.EntityName);
          case "displayName":
            return row.push(data.DisplayName);
          default:
            return row.push("");
        }
      });
      return { values: row };
    });
  } else if(endpoint == "Filenote") {
    values = apiResponse.map(function(info) {
      var data = info.Data;
      var joins = info.Relationships;
      var row = [];
      requestedFields.asArray().forEach(function(field) {
        switch (field.getId()) {
          case "entityName":
            return row.push(data.EntityName);
          case "recordInfo":
            return row.push(data.RecordInfo);
          case "name":
            return row.push(data.Name);
          case "description":
            return row.push(data.Description);
          case "createdDate":
            if(data.CreatedOn!=null) {
              var hold = data.CreatedOn;
              return row.push(hold.slice(0,10));
            } else { return row.push(""); }
          default:
            return row.push("");
        }
      });
      return { values: row };
    });
  } else if(endpoint == "LearnerAu") {
    values = apiResponse.map(function(info) {
      var data = info.Data;
      var joins = info.Relationships;
      var row = [];
      requestedFields.asArray().forEach(function(field) {
        switch (field.getId()) {
          case "firstName":
            return row.push(data.Personal.FirstName);
          case "lastName":
            return row.push(data.Personal.LastName);
          case "learnerNumber":
            return row.push(data.Personal.LearnerNumber);
          case "email":
            return row.push(data.Personal.EmailAddresses.Email);
          default:
            return row.push("");
        }
      });
      return { values: row };
    });
  } else if(endpoint == "LearnerNz") {
    values = apiResponse.map(function(info) {
      var data = info.Data;
      var joins = info.Relationships;
      var row = [];
      requestedFields.asArray().forEach(function(field) {
        switch (field.getId()) {
          case "firstName":
            return row.push(data.Personal.FirstName);
          case "lastName":
            return row.push(data.Personal.LastName);
          case "learnerNumber":
            return row.push(data.Personal.LearnerNumber);
          case "email":
            return row.push(data.Personal.EmailAddresses.Email);
          default:
            return row.push("");
        }
      });
      return { values: row };
    });
  } else if(endpoint == "LearnerSg") {
    values = apiResponse.map(function(info) {
      var data = info.Data;
      var joins = info.Relationships;
      var row = [];
      requestedFields.asArray().forEach(function(field) {
        switch (field.getId()) {
          case "firstName":
            return row.push(data.Personal.FirstName);
          case "lastName":
            return row.push(data.Personal.LastName);
          case "learnerNumber":
            return row.push(data.Personal.LearnerNumber);
          case "email":
            return row.push(data.Personal.EmailAddresses.Email);
          default:
            return row.push("");
        }
      });
      return { values: row };
    });
  } else if(endpoint == "LearnerPosition") {
    values = apiResponse.map(function(info) {
      var data = info.Data;
      var joins = info.Relationships;
      var row = [];
      requestedFields.asArray().forEach(function(field) {
        switch (field.getId()) {
          case "learner":
            return row.push(joins.Learner.FirstName+" "+joins.Learner.LastName);
          case "workplace":
            return row.push(joins.Workplace.Code+"-"+joins.Workplace.Description);
          case "position":
            return row.push(joins.Position.Code+"-"+joins.Position.Description);
          case "salesContact":
            return row.push(joins.SalesContact.FirstName+" "+joins.SalesContact.LastName);
          case "startDate":
            if(data.StartDate!=null) {
              var hold = data.StartDate;
              return row.push(hold.slice(0,10));
            } else { return row.push(""); }
          case "endDate":
            if(data.EndDate!=null) {
              var hold = data.EndDate;
              return row.push(hold.slice(0,10));
            } else { return row.push(""); }
          case "timestamp":
            if(data.LastModifiedTimeStamp!=null) {
              var hold = data.LastModifiedTimeStamp;
              return row.push(hold.slice(0,10));
            } else { return row.push(""); }
          default:
            return row.push("");
        }
      });
      return { values: row };
    });
  } else if(endpoint == "Opportunity") {
    values = apiResponse.map(function(info) {
      var data = info.Data;
      var joins = info.Relationships;
      var row = [];
      requestedFields.asArray().forEach(function(field) {
        switch (field.getId()) {
          case "salesContact":
            return row.push(joins.SalesContact.FirstName+" "+joins.SalesContact.LastName);
          case "description":
            return row.push(data.Description);
          case "notes":
            return row.push(data.Notes);
          case "amount":
            return row.push(data.Amount);
          case "createdDate":
            if(data.CreatedOn!=null) {
              var hold = data.CreatedOn;
              return row.push(hold.slice(0,10));
            } else { return row.push(""); }
          case "timestamp":
            if(data.LastModifiedTimeStamp!=null) {
              var hold = data.LastModifiedTimeStamp;
              return row.push(hold.slice(0,10));
            } else { return row.push(""); }
          default:
            return row.push("");
        }
      });
      return { values: row };
    });
  } else if(endpoint == "Promotions") {
    values = apiResponse.map(function(info) {
      var data = info.Data;
      var joins = info.Relationships;
      var row = [];
      requestedFields.asArray().forEach(function(field) {
        switch (field.getId()) {
          case "code":
            return row.push(data.Code);
          case "description":
            return row.push(data.Description);
          case "startDate":
            if(data.StartDate!=null) {
              var hold = data.StartDate;
              return row.push(hold.slice(0,10));
            } else { return row.push(""); }
          case "endDate":
            if(data.EndDate!=null) {
              var hold = data.EndDate;
              return row.push(hold.slice(0,10));
            } else { return row.push(""); }
          default:
            return row.push("");
        }
      });
      return { values: row };
    });
  } else if(endpoint == "SalesContacts") {
    values = apiResponse.map(function(info) {
      var data = info.Data;
      var joins = info.Relationships;
      var row = [];
      requestedFields.asArray().forEach(function(field) {
        switch (field.getId()) {
          case "firstName":
            return row.push(data.FirstName);
          case "lastName":
            return row.push(data.LastName);
          case "email":
            return row.push(data.Email);
          case "mobile":
            return row.push(data.Mobile);
          case "phone":
            return row.push(data.Phone);
          case "position":
            return row.push(data.Position);
          case "company":
            return row.push(data.Company);
          case "notes":
            return row.push(data.Notes);
          case "createdDate":
            if(data.CreatedOn!=null) {
              var hold = data.CreatedOn;
              return row.push(hold.slice(0,10));
            } else { return row.push(""); }
          case "timestamp":
            if(data.LastModifiedTimeStamp!=null) {
              var hold = data.LastModifiedTimeStamp;
              return row.push(hold.slice(0,10));
            } else { return row.push(""); }
          default:
            return row.push("");
        }
      });
      return { values: row };
    });
  } else if(endpoint == "SalesPersons") {
    values = apiResponse.map(function(info) {
      var data = info.Data;
      var joins = info.Relationships;
      var row = [];
      requestedFields.asArray().forEach(function(field) {
        switch (field.getId()) {
          case "firstName":
            return row.push(data.FirstName);
          case "lastName":
            return row.push(data.LastName);
          case "activeFlag":
            return row.push(data.IsActive);
          default:
            return row.push("");
        }
      });
      return { values: row };
    });
  } else if(endpoint == "Trainers") {
    values = apiResponse.map(function(info) {
      var data = info.Data;
      var joins = info.Relationships;
      var row = [];
      requestedFields.asArray().forEach(function(field) {
        switch (field.getId()) {
          case "firstName":
            return row.push(data.FirstName);
          case "lastName":
            return row.push(data.LastName);
          case "activeFlag":
            return row.push(data.IsActive);
          default:
            return row.push("");
        }
      });
      return { values: row };
    });
  } else if(endpoint == "UnitOffers") {
    try{
    values = apiResponse.map(function(info) {
      var data = info.Data;
      var joins = info.Relationships;
      var row = [];
      requestedFields.asArray().forEach(function(field) {
        switch (field.getId()) {
          case "max":
            return row.push(data.MaxRegistrations);
          case "min":
            return row.push(data.MinRegistrations);
          case "whatToBring":
            return row.push(data.WhatToBring);
          case "whereToBring":
            return row.push(data.WhereToGo);
          case "startDate":
            if(data.StartDate!=null) {
              var hold = data.StartDate;
              return row.push(hold.slice(0,10));
            } else { return row.push(""); }
          case "endDate":
            if(data.EndDate!=null) {
              var hold = data.EndDate;
              return row.push(hold.slice(0,10));
            } else { return row.push(""); }
          case "notes":
            return row.push(data.Notes);
          case "timestamp":
            if(data.LastModifiedTimeStamp!=null) {
              var hold = data.LastModifiedTimeStamp;
              return row.push(hold.slice(0,10));
            } else { return row.push(""); }
          default:
            return row.push("");
        }
      });
      return { values: row };
    });
    } catch (e) {
    cc.newUserError()
      .setDebugText('Error fetching data from API. Exception details: ' + e)
      .setText(
        'The connector has encountered an unrecoverable error. Please try again later, or file an issue if this error persists. error '+ data
      )
      .throwException();
  }
  } else if(endpoint == "UnitEnrollments") {
    values = apiResponse.map(function(info) {
      var data = info.Data;
      var joins = info.Relationships;
      var row = [];
      requestedFields.asArray().forEach(function(field) {
        switch (field.getId()) {
          case "unitEnrolmentId":
            return row.push(+data.UnitEnrolmentId);
          case "courseEnrolmentId":
            return row.push(+data.CourseEnrolmentId);
          case "name":
            return row.push(joins.Learner.FirstName+" "+joins.Learner.LastName);
          case "courseOfferDescription":
            return row.push(joins.CourseOffer.Description);
          case "CourseOfferCode":
            return row.push(joins.CourseOffer.Code);
          case "unitDescription":
            return row.push(joins.Unit.Description);
          case "unitCode":
            return row.push(joins.Unit.Code);
          case "startDate":
            if(data.StartDate!=null) {
              var hold = data.StartDate;
              return row.push(hold.slice(0,10));
            } else { return row.push(""); }
          case "endDate":
            if(data.EndDate!=null) {
              var hold = data.EndDate;
              return row.push(hold.slice(0,10));
            } else { return row.push(""); }
          default:
            return row.push("");
        }
      });
      return { values: row };
    });
  } else if(endpoint == "Workplaces") {
    values = apiResponse.map(function(info) {
      var data = info.Data;
      var joins = info.Relationships;
      var row = [];
      requestedFields.asArray().forEach(function(field) {
        switch (field.getId()) {
          case "code":
            return row.push(data.Code);
          case "description":
            return row.push(data.Description);
          case "legalName":
            return row.push(data.LegalName);
          case "archivedFlag":
            return row.push(data.ArchivedFlag);
          case "phone":
            return row.push(data.Phone);
          case "email":
            return row.push(data.Email);
          case "website":
            return row.push(data.Website);
          case "timestamp":
            var hold = data.LastModifiedTimeStamp;
            return row.push(hold.slice(0,10));
          default:
            return row.push("");
        }
      });
      return { values: row };
    });
  }
    
  return values;
}
function getConfig() {
  return {
    configParams: [
      {
        name: 'endpoint',
        label: 'Select the data you want to connect',
        helpText: 'The data that you want to connect to Google Data Studio',
        dataType: 'STRING',

        required: true
      },
      {
        name: 'apiKey',
        label: 'Enter your Api Key',
        helpText: 'Follow the instructions from the link to obtain your API-Key: https://learn.wisenet.co/how-to-generate-an-api-key',
        placeholder: 'Key5678',
        dataType: 'STRING',
        required: true
      }
    ]
  };
}