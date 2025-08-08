function getConfig(request) {
  var cc = DataStudioApp.createCommunityConnector();
  var config = cc.getConfig();

  config
  .newTextInput()
  .setId('apiKey')
  .setName('Enter your Api Key')
  .setHelpText('Enter your Wisenet API Key here. Do not store real credentials in code.')
  .setPlaceholder('YOUR_WISENET_API_KEY');  

  config
  .newSelectSingle()
  .setId('endpoint')
  .setName('Endpoint')
  .setHelpText('Select endpoint you want to fetch data from')

  .addOption(config.newOptionBuilder().setLabel('Agents').setValue('Agents'))
  .addOption(config.newOptionBuilder().setLabel('Assessors').setValue('Assessors'))
  .addOption(config.newOptionBuilder().setLabel('AuditLogs').setValue('AuditLogs'))
  .addOption(config.newOptionBuilder().setLabel('Checklists').setValue('Checklists'))
  .addOption(config.newOptionBuilder().setLabel('Checklistitems').setValue('Checklistitems'))
  .addOption(config.newOptionBuilder().setLabel('Coordinators').setValue('Coordinators'))
  .addOption(config.newOptionBuilder().setLabel('CourseEnrollments').setValue('CourseEnrollments'))
  .addOption(config.newOptionBuilder().setLabel('CourseEnrollments(Current)').setValue('CourseEnrollmentsCurrent'))
  .addOption(config.newOptionBuilder().setLabel('CourseOffers').setValue('CourseOffers'))
  .addOption(config.newOptionBuilder().setLabel('Entities').setValue('Entities'))
  .addOption(config.newOptionBuilder().setLabel('Filenote').setValue('Filenote'))
  .addOption(config.newOptionBuilder().setLabel('LearnerAu').setValue('LearnerAu'))
  .addOption(config.newOptionBuilder().setLabel('LearnerNz').setValue('LearnerNz'))
  .addOption(config.newOptionBuilder().setLabel('LearnerSg').setValue('LearnerSg'))
  .addOption(config.newOptionBuilder().setLabel('LearnerPosition').setValue('LearnerPosition'))
  .addOption(config.newOptionBuilder().setLabel('Opportunity').setValue('Opportunity'))
  .addOption(config.newOptionBuilder().setLabel('Promotions').setValue('Promotions'))
  .addOption(config.newOptionBuilder().setLabel('SalesContacts').setValue('SalesContacts'))
  .addOption(config.newOptionBuilder().setLabel('SalesPersons').setValue('SalesPersons'))
  .addOption(config.newOptionBuilder().setLabel('Trainers').setValue('Trainers'))
  .addOption(config.newOptionBuilder().setLabel('UnitOffers').setValue('UnitOffers'))
  .addOption(config.newOptionBuilder().setLabel('UnitEnrollments').setValue('UnitEnrollments'))
  .addOption(config.newOptionBuilder().setLabel('Workplaces').setValue('Workplaces'));
  
  return config.build();
}