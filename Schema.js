function getSchema(request) {
  var fields = getFields(request).build();
  return { schema: fields };
}

function getFields(request) {
  var cc = DataStudioApp.createCommunityConnector();
  var fields = cc.getFields();
  var types = cc.FieldType;
  var aggregations = cc.AggregationType;
  if (request.configParams.endpoint == "Agents") {
    fields
    .newDimension()
    .setId("name")
    .setName("Name")
    .setType(types.TEXT)
    .setDescription("Agent's Name");
    
    fields
    .newDimension()
    .setId("code")
    .setName("Code")
    .setType(types.TEXT)
    .setDescription("Agent's Code");
    
    fields
    .newDimension()
    .setId("email")
    .setName("Email")
    .setType(types.TEXT)
    .setDescription("Agent's Email");
    
    fields
    .newDimension()
    .setId("mobile")
    .setName("Mobile Number")
    .setType(types.TEXT)
    .setDescription("Agent's Mobile");
    
    fields
    .newDimension()
    .setId("phone")
    .setName("Phone Number")
    .setType(types.TEXT)
    .setDescription("Agent's Phone Number");
    
    fields
    .newDimension()
    .setId("fax")
    .setName("Fax")
    .setType(types.TEXT)
    .setDescription("Agent's Fax");
    
    fields
    .newDimension()
    .setId("website")
    .setName("Website")
    .setType(types.TEXT)
    .setDescription("Agent's Website");
    
    fields
    .newDimension()
    .setId("businessNumber")
    .setName("Business Number")
    .setType(types.TEXT)
    .setDescription("Agent's Business Number");
    
    fields
    .newDimension()
    .setId("address")
    .setName("Address")
    .setType(types.TEXT)
    .setDescription("Agent's Address");
    
  } else if (request.configParams.endpoint == "Assessors") {
    
    fields
    .newDimension()
    .setId("firstname")
    .setName("Firstname")
    .setType(types.TEXT)
    .setDescription("Agent's Firstname");
    
    fields
    .newDimension()
    .setId("lastname")
    .setName("Lastname")
    .setType(types.TEXT)
    .setDescription("Agent's Lastname");
    
    fields
    .newDimension()
    .setId("activeFlag")
    .setName("Active")
    .setType(types.BOOLEAN)
    .setDescription("Agent's Status");
    
  } else if (request.configParams.endpoint == "AuditLogs") {
    
    fields
    .newDimension()
    .setId("recordID")
    .setName("Record ID")
    .setType(types.NUMBER)
    .setDescription("Record ID");
    
    fields
    .newDimension()
    .setId("entityName")
    .setName("Entity Name")
    .setType(types.TEXT)
    .setDescription("Entity Name");
    
    fields
    .newDimension()
    .setId("auditAction")
    .setName("Audit Action")
    .setType(types.TEXT)
    .setDescription("Audit Action");
    
    fields
    .newDimension()
    .setId("timestamp")
    .setName("Timestamp")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("Timestamp");
    
  } else if (request.configParams.endpoint == "Checklists") {
    
    fields
    .newDimension()
    .setId("entityName")
    .setName("Entity Name")
    .setType(types.TEXT)
    .setDescription("Agent's Entity Name");
    
    fields
    .newDimension()
    .setId("dateDue")
    .setName("Date Due")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("Agent's Audit Action");
    
    fields
    .newDimension()
    .setId("dateCompleted")
    .setName("Date Completed")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("Date Completed");
    
    fields
    .newDimension()
    .setId("completedFlag")
    .setName("Completed")
    .setType(types.BOOLEAN)
    .setDescription("Completed");
    
    fields
    .newDimension()
    .setId("staffName")
    .setName("Staff Name")
    .setType(types.TEXT)
    .setDescription("Staff Name");
    
    fields
    .newDimension()
    .setId("notes")
    .setName("Notes")
    .setType(types.TEXT)
    .setDescription("Notes");
    
    fields
    .newDimension()
    .setId("amount")
    .setName("Amount")
    .setType(types.TEXT)
    .setDescription("Amount");
    
    fields
    .newDimension()
    .setId("taxExemptFlag")
    .setName("Tax Exempt")
    .setType(types.TEXT)
    .setDescription("Tax Exempt");
    
    fields
    .newDimension()
    .setId("timestamp")
    .setName("Timestamp")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("Timestamp");
    
  } else if (request.configParams.endpoint == "Checklistitems") {
    
    fields
    .newDimension()
    .setId("entityName")
    .setName("Entity Name")
    .setType(types.TEXT)
    .setDescription("Agent's Entity Name");
    
    fields
    .newDimension()
    .setId("type")
    .setName("Type")
    .setType(types.TEXT)
    .setDescription("Type");
    
    fields
    .newDimension()
    .setId("description")
    .setName("Description")
    .setType(types.TEXT)
    .setDescription("Description");
    
    fields
    .newDimension()
    .setId("activeFlag")
    .setName("Active")
    .setType(types.BOOLEAN)
    .setDescription("Status");
    
    fields
    .newDimension()
    .setId("timestamp")
    .setName("Timestamp")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("Timestamp");
    
  } else if (request.configParams.endpoint == "Coordinators") {
    
    fields
    .newDimension()
    .setId("firstname")
    .setName("Firstname")
    .setType(types.TEXT)
    .setDescription("Firstname");
    
    fields
    .newDimension()
    .setId("lastname")
    .setName("Lastname")
    .setType(types.TEXT)
    .setDescription("Lastname");
    
    fields
    .newDimension()
    .setId("activeFlag")
    .setName("Active")
    .setType(types.BOOLEAN)
    .setDescription("Status");
    
  } else if (request.configParams.endpoint == "CourseEnrollments") {
    
    fields
    .newDimension()
    .setId("courseEnrolmentId")
    .setName("Course Enrolment ID")
    .setType(types.NUMBER)
    .setDescription("Course Enrolment ID");
    
    fields
    .newDimension()
    .setId("name")
    .setName("Name")
    .setType(types.TEXT)
    .setDescription("Name");
    
    fields
    .newDimension()
    .setId("learnerNum")
    .setName("Learner Number")
    .setType(types.TEXT)
    .setDescription("Learner Number");
    
    fields
    .newDimension()
    .setId("email")
    .setName("Learner Email")
    .setType(types.TEXT)
    .setDescription("Learner Email");
    
    fields
    .newDimension()
    .setId("courseOfferDescription")
    .setName("Course Offer Description")
    .setType(types.TEXT)
    .setDescription("Course Offer Description");
    
    fields
    .newDimension()
    .setId("courseOfferCode")
    .setName("Course Offer Code")
    .setType(types.TEXT)
    .setDescription("Course Offer Code");
    
    fields
    .newDimension()
    .setId("startDate")
    .setName("Start Date")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("Start Date");
    
    fields
    .newDimension()
    .setId("endDate")
    .setName("End Date")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("End Date");
    
    fields
    .newDimension()
    .setId("enrolmentStatus")
    .setName("Enrolment Status")
    .setType(types.TEXT)
    .setDescription("Enrolment Status");
    
    fields
    .newDimension()
    .setId("EnrolmentStatusReason")
    .setName("Enrolment Status Reason")
    .setType(types.TEXT)
    .setDescription("Enrolment Status Reason");
    
    fields
    .newDimension()
    .setId("studyMode")
    .setName("Study Mode")
    .setType(types.TEXT)
    .setDescription("Study Mode");
    
  } else if (request.configParams.endpoint == "CourseEnrollmentsCurrent") {
    
    fields
    .newDimension()
    .setId("courseEnrolmentId")
    .setName("Course Enrolment ID")
    .setType(types.NUMBER)
    .setDescription("Course Enrolment ID");
    
    fields
    .newDimension()
    .setId("name")
    .setName("Name")
    .setType(types.TEXT)
    .setDescription("Name");
    
    fields
    .newDimension()
    .setId("learnerNum")
    .setName("Learner Number")
    .setType(types.TEXT)
    .setDescription("Learner Number");
    
    fields
    .newDimension()
    .setId("email")
    .setName("Learner Email")
    .setType(types.TEXT)
    .setDescription("Learner Email");
    
    fields
    .newDimension()
    .setId("courseOfferDescription")
    .setName("Course Offer Description")
    .setType(types.TEXT)
    .setDescription("Course Offer Description");
    
    fields
    .newDimension()
    .setId("courseOfferCode")
    .setName("Course Offer Code")
    .setType(types.TEXT)
    .setDescription("Course Offer Code");
    
    fields
    .newDimension()
    .setId("startDate")
    .setName("Start Date")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("Start Date");
    
    fields
    .newDimension()
    .setId("endDate")
    .setName("End Date")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("End Date");
    
    fields
    .newDimension()
    .setId("enrolmentStatus")
    .setName("Enrolment Status")
    .setType(types.TEXT)
    .setDescription("Enrolment Status");
    
    fields
    .newDimension()
    .setId("EnrolmentStatusReason")
    .setName("Enrolment Status Reason")
    .setType(types.TEXT)
    .setDescription("Enrolment Status Reason");
    
    fields
    .newDimension()
    .setId("studyMode")
    .setName("Study Mode")
    .setType(types.TEXT)
    .setDescription("Study Mode");
    
  } else if (request.configParams.endpoint == "CourseOffers") {
    
    fields
    .newDimension()
    .setId("learner")
    .setName("Learner")
    .setType(types.TEXT)
    .setDescription("Learner");
    
    fields
    .newDimension()
    .setId("assessor")
    .setName("Assessor")
    .setType(types.TEXT)
    .setDescription("Assessor");
    
    fields
    .newDimension()
    .setId("studentNumber")
    .setName("Student Number")
    .setType(types.TEXT)
    .setDescription("Student Number");
    
    fields
    .newDimension()
    .setId("startDate")
    .setName("Start Date")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("Start Date");
    
    fields
    .newDimension()
    .setId("endDate")
    .setName("End Date")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("End Date");
    
    fields
    .newDimension()
    .setId("mainSubject")
    .setName("Main Subject")
    .setType(types.TEXT)
    .setDescription("Main Subject");
    
    fields
    .newDimension()
    .setId("venue")
    .setName("Venue")
    .setType(types.TEXT)
    .setDescription("Venue");
    
    fields
    .newDimension()
    .setId("notes")
    .setName("Notes")
    .setType(types.TEXT)
    .setDescription("Notes");
    
    fields
    .newDimension()
    .setId("timestamp")
    .setName("Timestamp")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("Timestamp");
    
  } else if (request.configParams.endpoint == "Entities") {
    
    fields
    .newDimension()
    .setId("entityName")
    .setName("Entity Name")
    .setType(types.TEXT)
    .setDescription("Entity Name");
    
    fields
    .newDimension()
    .setId("displayName")
    .setName("Display Name")
    .setType(types.TEXT)
    .setDescription("Display Name");
    
  } else if (request.configParams.endpoint == "Filenote") {
    
    fields
    .newDimension()
    .setId("entityName")
    .setName("Entity Name")
    .setType(types.TEXT)
    .setDescription("Entity Name");
    
    fields
    .newDimension()
    .setId("recordInfo")
    .setName("Record Info")
    .setType(types.TEXT)
    .setDescription("Record Info");
    
    fields
    .newDimension()
    .setId("name")
    .setName("Name")
    .setType(types.TEXT)
    .setDescription("Name");
    
    fields
    .newDimension()
    .setId("description")
    .setName("Description")
    .setType(types.TEXT)
    .setDescription("Description");
    
    fields
    .newDimension()
    .setId("createdDate")
    .setName("Created Date")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("Created Date");
    
  } else if (request.configParams.endpoint == "LearnerAu") {
    
    fields
    .newDimension()
    .setId("firstName")
    .setName("First Name")
    .setType(types.TEXT)
    .setDescription("First Name");
    
    fields
    .newDimension()
    .setId("lastName")
    .setName("Last Name")
    .setType(types.TEXT)
    .setDescription("Last Name");
    
    fields
    .newDimension()
    .setId("learnerNumber")
    .setName("Learner Number")
    .setType(types.TEXT)
    .setDescription("Learner Number");
    
    fields
    .newDimension()
    .setId("email")
    .setName("Email")
    .setType(types.TEXT)
    .setDescription("Email");
    
  } else if (request.configParams.endpoint == "LearnerNz") {
    
    fields
    .newDimension()
    .setId("firstName")
    .setName("First Name")
    .setType(types.TEXT)
    .setDescription("First Name");
    
    fields
    .newDimension()
    .setId("lastName")
    .setName("Last Name")
    .setType(types.TEXT)
    .setDescription("Last Name");
    
    fields
    .newDimension()
    .setId("learnerNumber")
    .setName("Learner Number")
    .setType(types.TEXT)
    .setDescription("Learner Number");
    
    fields
    .newDimension()
    .setId("email")
    .setName("Email")
    .setType(types.TEXT)
    .setDescription("Email");
    
  } else if (request.configParams.endpoint == "LearnerSg") {
    
    fields
    .newDimension()
    .setId("firstName")
    .setName("First Name")
    .setType(types.TEXT)
    .setDescription("First Name");
    
    fields
    .newDimension()
    .setId("lastName")
    .setName("Last Name")
    .setType(types.TEXT)
    .setDescription("Last Name");
    
    fields
    .newDimension()
    .setId("learnerNumber")
    .setName("Learner Number")
    .setType(types.TEXT)
    .setDescription("Learner Number");
    
    fields
    .newDimension()
    .setId("email")
    .setName("Email")
    .setType(types.TEXT)
    .setDescription("Email");
    
  } else if (request.configParams.endpoint == "LearnerPosition") {
    
    fields
    .newDimension()
    .setId("learner")
    .setName("Learner")
    .setType(types.TEXT)
    .setDescription("Learner");
    
    fields
    .newDimension()
    .setId("workplace")
    .setName("Workplace")
    .setType(types.TEXT)
    .setDescription("Workplace");
    
    fields
    .newDimension()
    .setId("position")
    .setName("Position")
    .setType(types.TEXT)
    .setDescription("Position");
    
    fields
    .newDimension()
    .setId("salesContact")
    .setName("Sales Contact")
    .setType(types.TEXT)
    .setDescription("Sales Contact");
    
    fields
    .newDimension()
    .setId("startDate")
    .setName("Start Date")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("Start Date");
    
    fields
    .newDimension()
    .setId("endDate")
    .setName("End Date")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("End Date");
    
    fields
    .newDimension()
    .setId("timestamp")
    .setName("Timestamp")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("Timestamp");
    
  } else if (request.configParams.endpoint == "Opportunity") {
    
    fields
    .newDimension()
    .setId("salesContact")
    .setName("Sales Contact")
    .setType(types.TEXT)
    .setDescription("Sales Contact");
    
    fields
    .newDimension()
    .setId("description")
    .setName("Description")
    .setType(types.TEXT)
    .setDescription("Description");
    
    fields
    .newDimension()
    .setId("notes")
    .setName("Notes")
    .setType(types.TEXT)
    .setDescription("Notes");
    
    fields
    .newDimension()
    .setId("amount")
    .setName("Amount")
    .setType(types.TEXT)
    .setDescription("Amount");
    
    fields
    .newDimension()
    .setId("createdDate")
    .setName("Created Date")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("Created Date");
    
    fields
    .newDimension()
    .setId("timestamp")
    .setName("Timestamp")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("Timestamp");
    
  } else if (request.configParams.endpoint == "Promotions") {
    
    fields
    .newDimension()
    .setId("code")
    .setName("Code")
    .setType(types.TEXT)
    .setDescription("Code");
    
    fields
    .newDimension()
    .setId("description")
    .setName("Description")
    .setType(types.TEXT)
    .setDescription("Description");
    
    fields
    .newDimension()
    .setId("startDate")
    .setName("Start Date")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("Start Date");
    
    fields
    .newDimension()
    .setId("endDate")
    .setName("End Date")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("End Date");
    
  } else if (request.configParams.endpoint == "SalesContacts") {
    
    fields
    .newDimension()
    .setId("firstName")
    .setName("First Name")
    .setType(types.TEXT)
    .setDescription("First Name");
    
    fields
    .newDimension()
    .setId("lastName")
    .setName("Last Name")
    .setType(types.TEXT)
    .setDescription("Last Name");
    
    fields
    .newDimension()
    .setId("email")
    .setName("Email")
    .setType(types.TEXT)
    .setDescription("Email");
    
    fields
    .newDimension()
    .setId("mobile")
    .setName("Mobile")
    .setType(types.TEXT)
    .setDescription("Mobile");
    
    fields
    .newDimension()
    .setId("phone")
    .setName("Phone")
    .setType(types.TEXT)
    .setDescription("Phone");
    
    fields
    .newDimension()
    .setId("position")
    .setName("Position")
    .setType(types.TEXT)
    .setDescription("Position");
    
    fields
    .newDimension()
    .setId("company")
    .setName("Company")
    .setType(types.TEXT)
    .setDescription("Company");
    
    fields
    .newDimension()
    .setId("notes")
    .setName("Notes")
    .setType(types.TEXT)
    .setDescription("Notes");
    
    fields
    .newDimension()
    .setId("createdDate")
    .setName("Created Date")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("Created Date");
    
    fields
    .newDimension()
    .setId("timestamp")
    .setName("Timestamp")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("Timestamp");
    
  } else if (request.configParams.endpoint == "SalesContacts") {
    
    fields
    .newDimension()
    .setId("firstName")
    .setName("First Name")
    .setType(types.TEXT)
    .setDescription("First Name");
    
    fields
    .newDimension()
    .setId("lastName")
    .setName("Last Name")
    .setType(types.TEXT)
    .setDescription("Last Name");
    
    fields
    .newDimension()
    .setId("email")
    .setName("Email")
    .setType(types.TEXT)
    .setDescription("Email");
    
    fields
    .newDimension()
    .setId("mobile")
    .setName("Mobile")
    .setType(types.TEXT)
    .setDescription("Mobile");
    
    fields
    .newDimension()
    .setId("phone")
    .setName("Phone")
    .setType(types.TEXT)
    .setDescription("Phone");
    
    fields
    .newDimension()
    .setId("position")
    .setName("Position")
    .setType(types.TEXT)
    .setDescription("Position");
    
    fields
    .newDimension()
    .setId("company")
    .setName("Company")
    .setType(types.TEXT)
    .setDescription("Company");
    
    fields
    .newDimension()
    .setId("notes")
    .setName("Notes")
    .setType(types.TEXT)
    .setDescription("Notes");
    
    fields
    .newDimension()
    .setId("startDate")
    .setName("Start Date")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("Start Date");
    
    fields
    .newDimension()
    .setId("endDate")
    .setName("End Date")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("End Date");
    
  } else if (request.configParams.endpoint == "SalesPersons") {
    
    fields
    .newDimension()
    .setId("firstName")
    .setName("First Name")
    .setType(types.TEXT)
    .setDescription("First Name");
    
    fields
    .newDimension()
    .setId("lastName")
    .setName("Last Name")
    .setType(types.TEXT)
    .setDescription("Last Name");
    
    fields
    .newDimension()
    .setId("activeFlag")
    .setName("Status")
    .setType(types.BOOLEAN)
    .setDescription("Status");
    
  } else if (request.configParams.endpoint == "Trainers") {
    
    fields
    .newDimension()
    .setId("firstName")
    .setName("First Name")
    .setType(types.TEXT)
    .setDescription("First Name");
    
    fields
    .newDimension()
    .setId("lastName")
    .setName("Last Name")
    .setType(types.TEXT)
    .setDescription("Last Name");
    
    fields
    .newDimension()
    .setId("activeFlag")
    .setName("Status")
    .setType(types.BOOLEAN)
    .setDescription("Status");
    
  } else if (request.configParams.endpoint == "UnitOffers") {
    
    fields
    .newDimension()
    .setId("max")
    .setName("Max Registrations")
    .setType(types.TEXT)
    .setDescription("Max Registrations");
    
    fields
    .newDimension()
    .setId("min")
    .setName("Min Registrations")
    .setType(types.TEXT)
    .setDescription("Min Registrations");
    
    fields
    .newDimension()
    .setId("whatToBring")
    .setName("What to Bring")
    .setType(types.TEXT)
    .setDescription("What to Bring");
    
    fields
    .newDimension()
    .setId("whereToBring")
    .setName("Where to Go")
    .setType(types.TEXT)
    .setDescription("Where to Bring");
    
    fields
    .newDimension()
    .setId("startDate")
    .setName("Start Date")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("Start Date");
    
    fields
    .newDimension()
    .setId("endDate")
    .setName("End Date")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("End Date");
    
    fields
    .newDimension()
    .setId("notes")
    .setName("Notes")
    .setType(types.TEXT)
    .setDescription("Notes");
    
    fields
    .newDimension()
    .setId("timestamp")
    .setName("Timestamp")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("Timestamp");
    
  } else if (request.configParams.endpoint == "UnitEnrollments") {
    
    fields
    .newDimension()
    .setId("unitEnrolmentId")
    .setName("Unit Enrolment ID")
    .setType(types.NUMBER)
    .setDescription("Unit Enrolment ID");
    
    fields
    .newDimension()
    .setId("courseEnrolmentId")
    .setName("Course Enrolment ID")
    .setType(types.NUMBER)
    .setDescription("Course Enrolment ID");
    
    fields
    .newDimension()
    .setId("name")
    .setName("Name")
    .setType(types.TEXT)
    .setDescription("Name");
    
    fields
    .newDimension()
    .setId("courseOfferDescription")
    .setName("Course Offer Description")
    .setType(types.TEXT)
    .setDescription("Course Offer Description");
    
    fields
    .newDimension()
    .setId("CourseOfferCode")
    .setName("Course Offer Code")
    .setType(types.TEXT)
    .setDescription("Course Offer Code");
    
    fields
    .newDimension()
    .setId("unitDescription")
    .setName("Unit Description")
    .setType(types.TEXT)
    .setDescription("Unit Description");
    
    fields
    .newDimension()
    .setId("unitCode")
    .setName("Unit Code")
    .setType(types.TEXT)
    .setDescription("Unit Code");
    
    fields
    .newDimension()
    .setId("startDate")
    .setName("Start Date")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("Start Date");
    
    fields
    .newDimension()
    .setId("endDate")
    .setName("End Date")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("End Date");
    
  } else if (request.configParams.endpoint == "Workplaces") {
    
    fields
    .newDimension()
    .setId("code")
    .setName("Code")
    .setType(types.TEXT)
    .setDescription("Code");
    
    fields
    .newDimension()
    .setId("description")
    .setName("Description")
    .setType(types.TEXT)
    .setDescription("Description");
    
    fields
    .newDimension()
    .setId("legalName")
    .setName("Legal Name")
    .setType(types.TEXT)
    .setDescription("Legal Name");
    
    fields
    .newDimension()
    .setId("archivedFlag")
    .setName("Archived")
    .setType(types.BOOLEAN)
    .setDescription("Archived");
    
    fields
    .newDimension()
    .setId("phone")
    .setName("Phone")
    .setType(types.TEXT)
    .setDescription("Phone");
    
    fields
    .newDimension()
    .setId("email")
    .setName("Email")
    .setType(types.TEXT)
    .setDescription("Email");
    
    fields
    .newDimension()
    .setId("website")
    .setName("Website")
    .setType(types.TEXT)
    .setDescription("Website");
    
    fields
    .newDimension()
    .setId("timestamp")
    .setName("Timestamp")
    .setType(types.YEAR_MONTH_DAY)
    .setDescription("Timestamp");
    
  }
  
  return fields;
}