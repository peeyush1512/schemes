import { NgModule } from '@angular/core';
import { CommonModule ,DatePipe } from '@angular/common';

import { StateRoutingModule } from './state-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommonComponent } from './components/common/common.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatNativeDateModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';


import { ANCELAComponent } from './components/MATERNAL/anc-ela/anc-ela.component'
import { ANCFIRSTComponent } from './components/MATERNAL/anc-first/anc-first.component'
import { VHSNDUHSNDMonitoringComponent } from './components/MATERNAL/vhsnd-uhsnd-monitoring/vhsnd-uhsnd-monitoring.component';
import { PregnantWomenReceivedFOUROrMoreANCComponent } from './components/MATERNAL/pregnant-women-received-four-or-more-anc/pregnant-women-received-four-or-more-anc.component';
import { TreatmentOfSevereAnemiaAgainstDetectedComponent } from './components/MATERNAL/treatment-of-severe-anemia-against-detected/treatment-of-severe-anemia-against-detected.component';
import { IFADistributionComponent } from './components/MATERNAL/ifa-distribution/ifa-distribution.component';
import { PWGivenOneAlbendazoleTabletAfterFIRSTTrimesterComponent } from './components/MATERNAL/pw-given-one-albendazole-tablet-after-first-trimester/pw-given-one-albendazole-tablet-after-first-trimester.component';
import { PWReceivedTSZCalciumTabletComponent } from './components/MATERNAL/pw-received-tsz-calcium-tablet/pw-received-tsz-calcium-tablet.component';
import { StatusOfInstitutionalDeliveryAgainstPELAComponent } from './components/MATERNAL/status-of-institutional-delivery-against-pela/status-of-institutional-delivery-against-pela.component';
import { StatusofANCVsInstitutionalDeliveryComponent } from './components/MATERNAL/statusof-ancvs-institutional-delivery/statusof-ancvs-institutional-delivery.component';
import { StatusofCSectionagainstInstitutionalDeliveryagainstPELAComponent } from './components/MATERNAL/statusof-c-sectionagainst-institutional-deliveryagainst-pela/statusof-c-sectionagainst-institutional-deliveryagainst-pela.component';
import { HighRiskPregnancyComponent } from './components/MATERNAL/high-risk-pregnancy/high-risk-pregnancy.component';
import { HighRiskPregnancyIdentificationComponent } from './components/MATERNAL/high-risk-pregnancy-identification/high-risk-pregnancy-identification.component';
import { StatusofHRPreportingintheStateComponent } from './components/MATERNAL/statusof-hrpreportinginthe-state/statusof-hrpreportinginthe-state.component';
import { HRPbifurcationStatelevelComponent } from './components/MATERNAL/hrpbifurcation-statelevel/hrpbifurcation-statelevel.component';
import { Topdistrictswithmorethan100HRPregisteredinTWOMONTHSComponent } from './components/MATERNAL/topdistrictswithmorethan100-hrpregisteredin-twomonths/topdistrictswithmorethan100-hrpregisteredin-twomonths.component';
import { FIRSTREFERRALUNITFRUComponent } from './components/MATERNAL/firstreferralunit-fru/firstreferralunit-fru.component';
import { MCHWingComponent } from './components/MATERNAL/mchwing/mchwing.component';
import { StatusofJSYpaymentagainstROPPELAComponent } from './components/MATERNAL/statusof-jsypaymentagainst-roppela/statusof-jsypaymentagainst-roppela.component';
import { StatusofJSSKdietagainstROPPELAComponent } from './components/MATERNAL/statusof-jsskdietagainst-rop-p.ela/statusof-jsskdietagainst-rop-p.ela.component';
import { StatusofMDSRReviewComponent } from './components/MATERNAL/statusof-mdsrreview/statusof-mdsrreview.component';
import { BloodTransfusionServicesinStateFacilitiesComponent } from './components/BLOODSERVICE/blood-transfusion-servicesin-state-facilities/blood-transfusion-servicesin-state-facilities.component';
import { StateScenarioBloodCollectionComponent } from './components/BLOODSERVICE/state-scenario-blood-collection/state-scenario-blood-collection.component';
import { BloodCollectioninChhattisgarhStateLASTYEARComponent } from './components/BLOODSERVICE/blood-collectionin-chhattisgarh-state-lastyear/blood-collectionin-chhattisgarh-state-lastyear.component';
import { BloodCollectioninChhattisgarhStateTWOMONTHSComponent } from './components/BLOODSERVICE/blood-collectionin-chhattisgarh-state-twomonths/blood-collectionin-chhattisgarh-state-twomonths.component';
import { StatusofBloodStorageUnitsinFRUCHCsANDCHsComponent } from './components/BLOODSERVICE/statusof-blood-storage-unitsin-fruchcs-andchs/statusof-blood-storage-unitsin-fruchcs-andchs.component';
import { GovtBloodCenterCampCollectionLASTYEARComponent } from './components/BLOODSERVICE/govt-blood-center-camp-collection-lastyear/govt-blood-center-camp-collection-lastyear.component';
import { SickleCellscreeninginSickleCellPrabandhanunitComponent } from './components/SickleCellDisorderManagementProgram/sickle-cellscreeningin-sickle-cell-prabandhanunit/sickle-cellscreeningin-sickle-cell-prabandhanunit.component';
import { INSPECTIONOFEACHCENTERSINEVERYQUARTERComponent } from './components/PC & PNDT/inspectionofeachcentersineveryquarter/inspectionofeachcentersineveryquarter.component';
import { DISTRICTADVISORYCOMMITTEEMEETINGINEVERYTWOMONTHSComponent } from './components/PC & PNDT/districtadvisorycommitteemeetingineverytwomonths/districtadvisorycommitteemeetingineverytwomonths.component';
import { SNCUAdmissionBORANDOutcomeComponent } from './components/Child Health (FBNC)/sncuadmission-borandoutcome/sncuadmission-borandoutcome.component';
import { CauseofDeathProfileTWOMONTHSComponent } from './components/Child Health (FBNC)/causeof-death-profile-twomonths/causeof-death-profile-twomonths.component';
import { BedOccupancyRateatNutritionRehabilitationCentersComponent } from './components/Child Health Nutrition, HBNC & HBYC/bed-occupancy-rateat-nutrition-rehabilitation-centers/bed-occupancy-rateat-nutrition-rehabilitation-centers.component';
import { SuccessfulDischargeRateatNutritionRehabilitationCentresComponent } from './components/Child Health Nutrition, HBNC & HBYC/successful-discharge-rateat-nutrition-rehabilitation-centres/successful-discharge-rateat-nutrition-rehabilitation-centres.component';
import { NutritionRehabilitationCenterComponent } from './components/Child Health Nutrition, HBNC & HBYC/nutrition-rehabilitation-center/nutrition-rehabilitation-center.component';
import { AMBPEROfChildrenSFNMonthsgivenETDosesofIFAsyrupeverymonthComponent } from './components/Child Health Nutrition, HBNC & HBYC/amb-per-of-children-s-fn-monthsgiven-e-t-dosesof-ifasyrupeverymonth/amb-per-of-children-s-fn-monthsgiven-e-t-dosesof-ifasyrupeverymonth.component';
import { PERofChildrenFIVENINEyearsgivenFOURFIVEIFAtabletseverymonthComponent } from './components/Child Health Nutrition, HBNC & HBYC/perof-children-five-nineyearsgiven-four-fiveifatabletseverymonth/perof-children-five-nineyearsgiven-four-fiveifatabletseverymonth.component';
import { CoverageofinSchoolbeneficiariesunderWIFSProgrammeComponent } from './components/Child Health Nutrition, HBNC & HBYC/coverageofin-schoolbeneficiariesunder-wifsprogramme/coverageofin-schoolbeneficiariesunder-wifsprogramme.component';
import { CoverageofoutOfSchoolgirlsunderWIFSProgrammeComponent } from './components/Child Health Nutrition, HBNC & HBYC/coverageofout-of-schoolgirlsunder-wifsprogramme/coverageofout-of-schoolgirlsunder-wifsprogramme.component';
import { AnemiaMuktBharatAMBComponent } from './components/Child Health Nutrition, HBNC & HBYC/anemia-mukt-bharat-amb/anemia-mukt-bharat-amb.component';
import { StatusofchildrenScreeningSchoolAWCLASTYEARDataSourceRBSKPortalComponent } from './components/Rashtriya Bal Swasthya Karyakram(Chirayu)/statusofchildren-screening-school-awclastyeardata-source-rbskportal/statusofchildren-screening-school-awclastyeardata-source-rbskportal.component';
import { StatusofAWCvisitedANDchildrenScreeningAprilMayYEARComponent } from './components/Rashtriya Bal Swasthya Karyakram(Chirayu)/statusof-awcvisited-andchildren-screening-april-may-year/statusof-awcvisited-andchildren-screening-april-may-year.component';
import { TreatmentStatusinallCategoryABCDEYEARTWOMONTHSComponent } from './components/Rashtriya Bal Swasthya Karyakram(Chirayu)/treatment-statusinall-category-a-b-c-d-e-year-twomonths/treatment-statusinall-category-a-b-c-d-e-year-twomonths.component';
import { ObservationANDIssuesandRecommendationsComponent } from './components/Rashtriya Bal Swasthya Karyakram(Chirayu)/observation-andissuesand-recommendations/observation-andissuesand-recommendations.component';
import { FullImmunizationCoverageinPERComponent } from './components/Routine Immunization/full-immunization-coveragein-per/full-immunization-coveragein-per.component';
import { AdherencetoOpenvialpolicyComponent } from './components/Routine Immunization/adherenceto-openvialpolicy/adherenceto-openvialpolicy.component';
import { DiscardofRIvaccinedosesComponent } from './components/Routine Immunization/discardof-rivaccinedoses/discardof-rivaccinedoses.component';
import { TrainingofHealthandwellnessambassadoSHWPComponent } from './components/Adolescent Health/trainingof-healthandwellnessambassado-shwp/trainingof-healthandwellnessambassado-shwp.component';
import { PermanentFPServicesStatusTWOMONTHSSComponent } from './components/Family Planning/permanent-fpservices-status-twomonthss/permanent-fpservices-status-twomonthss.component';
import { SpacingFPServicesStatusTWOMONTHSComponent } from './components/Family Planning/spacing-fp-services-status-twomonths/spacing-fp-services-status-twomonths.component';
import { PPIUCDAcceptancePERComponent } from './components/Family Planning/ppiucd-acceptance-per/ppiucd-acceptance-per.component';
import { PERInjectableMPAUsersAmongEligiblecouplesComponent } from './components/Family Planning/per-injectable-mpa-users-among-eligiblecouples/per-injectable-mpa-users-among-eligiblecouples.component';
import { KeyFPPrioritiesComponent } from './components/Family Planning/key-fp-priorities/key-fp-priorities.component';
import { SuspectExaminationRateTHREEMONTHSComponent } from './components/National  Tuberculosis Elimination Programme (NTEP)/suspect-examination-rate-three-months/suspect-examination-rate-three-months.component';
import { PercentageofNotificationachievedagainstTargetComponent } from './components/National  Tuberculosis Elimination Programme (NTEP)/percentageof-notificationachievedagainst-target/percentageof-notificationachievedagainst-target.component';
import { SuccessRateOFYEARComponent } from './components/National  Tuberculosis Elimination Programme (NTEP)/success-rate-of-year/success-rate-of-year.component';
import { NPYPaymentOFYEARComponent } from './components/National  Tuberculosis Elimination Programme (NTEP)/npy-payment-of-year/npy-payment-of-year.component';
import { AdoptionStatusOfTBPatientsByNikshayMitraComponent } from './components/National Leprosy Eradication Programme/adoption-status-of-tb-patients-by-nikshay-mitra/adoption-status-of-tb-patients-by-nikshay-mitra.component';
import { NewCaseFYComponent } from './components/National Leprosy Eradication Programme/new-case-fy/new-case-fy.component';
import { PercentageOfGTWODAmongNewCaseComponent } from './components/National Leprosy Eradication Programme/percentage-of-g-two-d-among-new-case/percentage-of-g-two-d-among-new-case.component';
import { PercentageOfChildCaseAmongNewCaseComponent } from './components/National Leprosy Eradication Programme/percentage-of-child-case-among-new-case/percentage-of-child-case-among-new-case.component';
import { PercentageOfMBCaseAmongNewCaseComponent } from './components/National Leprosy Eradication Programme/percentage-of-mb-case-among-new-case/percentage-of-mb-case-among-new-case.component';
import { StatusOfEligibleCasesForRCSAandRCSPerformedTillFYComponent } from './components/National Leprosy Eradication Programme/status-of-eligible-cases-for-rcs-aand-rcs-performed-till-fy/status-of-eligible-cases-for-rcs-aand-rcs-performed-till-fy.component';
import { TargetVsAchievementBloodSlideRDTYEARComponent } from './components/National Vector Borne Disease Control Programme (NVBDCP)/target-vs-achievement-blood-slide-rdt-year/target-vs-achievement-blood-slide-rdt-year.component';
import { IndoorResidualSprayPopulationCoverageInTWORoundComponent } from './components/National Vector Borne Disease Control Programme (NVBDCP)/indoor-residual-spray-population-coverage-in-two-round/indoor-residual-spray-population-coverage-in-two-round.component';
import { DengueCasesYEARComponent } from './components/National Vector Borne Disease Control Programme (NVBDCP)/dengue-cases-year/dengue-cases-year.component';
import { MorbidityManagementDiseasePreventionServicesForLymphedemaCasesComponent } from './components/National Vector Borne Disease Control Programme (NVBDCP)/morbidity-management-disease-prevention-services-for-lymphedema-cases/morbidity-management-disease-prevention-services-for-lymphedema-cases.component';
import { MorbidityManagementStatusComponent } from './components/National Vector Borne Disease Control Programme (NVBDCP)/morbidity-management-status/morbidity-management-status.component';
import { HydrocelectomyStatusComponent } from './components/National Vector Borne Disease Control Programme (NVBDCP)/hydrocelectomy-status/hydrocelectomy-status.component';
import { AcuteEncephalitisSyndromeJapaneseEncephalitisComponent } from './components/National Vector Borne Disease Control Programme (NVBDCP)/acute-encephalitis-syndrome-japanese-encephalitis/acute-encephalitis-syndrome-japanese-encephalitis.component';
import { IHIPReportingStatusComponent } from './components/Integrated Disease Surveillance Programme (IDSP)/ihip-reporting-status/ihip-reporting-status.component';
import { CataractSurgeryPublicSectorANDPvtSectorAgainstELAComponent } from './components/National Program For Control Of Blindness And Vision Impairment (NPCB +VI)/cataract-surgery-public-sector-and-pvt-sector-against-ela/cataract-surgery-public-sector-and-pvt-sector-against-ela.component';
import { SchoolEyeScreeningProvidedFreeGlassesComponent } from './components/National Program For Control Of Blindness And Vision Impairment (NPCB +VI)/school-eye-screening-provided-free-glasses/school-eye-screening-provided-free-glasses.component';
import { CataractSurgeryPublicSectorANDPvtSectorAgainstELATWOMONTHSComponent } from './components/National Program For Control Of Blindness And Vision Impairment (NPCB +VI)/cataract-surgery-public-sector-and-pvt-sector-against-elatwo-months/cataract-surgery-public-sector-and-pvt-sector-against-elatwo-months.component';
import { SchoolEyeScreeningProvidedFreeGlassesTWOMONTHSSchoolVacationGoingOnComponent } from './components/National Program For Control Of Blindness And Vision Impairment (NPCB +VI)/school-eye-screening-provided-free-glasses-two-months-school-vacation-going-on/school-eye-screening-provided-free-glasses-two-months-school-vacation-going-on.component';
import { CataractBacklogFreeDistrictYearComponent } from './components/National Program For Control Of Blindness And Vision Impairment (NPCB +VI)/cataract-backlog-free-district-year/cataract-backlog-free-district-year.component';
import { NationalNCDPortalActiveUserStatusComponent } from './components/National Programme for Prevention and Control of Diabetes, Cardiovascular Disease and Stroke (NPCDCS)/national-ncd-portal-active-user-status/national-ncd-portal-active-user-status.component';
import { NEWENROLMENTSTATUSComponent } from './components/National Programme for Prevention and Control of Diabetes, Cardiovascular Disease and Stroke (NPCDCS)/new-enrolment-status/new-enrolment-status.component';
import { ABHAIDSTATUSComponent } from './components/National Programme for Prevention and Control of Diabetes, Cardiovascular Disease and Stroke (NPCDCS)/abha-id-status/abha-id-status.component';
import { NATIONALNCDPORTALSCREENINGSTATUSComponent } from './components/National Programme for Prevention and Control of Diabetes, Cardiovascular Disease and Stroke (NPCDCS)/national-ncd-portal-screening-status/national-ncd-portal-screening-status.component';
import { NATIONALNCDPORTALRESCREENINGSTATUSComponent } from './components/National Programme for Prevention and Control of Diabetes, Cardiovascular Disease and Stroke (NPCDCS)/national-ncd-portal-re-screening-status/national-ncd-portal-re-screening-status.component';
import { NATIONALNCDPORTALNEWDIABETESTREATMENTSTATUSComponent } from './components/National Programme for Prevention and Control of Diabetes, Cardiovascular Disease and Stroke (NPCDCS)/national-ncd-portal-new-diabetes-treatment-status/national-ncd-portal-new-diabetes-treatment-status.component';
import { NATIONALNCDPORTALDIABETESFOLLOWUPSTATUSComponent } from './components/National Programme for Prevention and Control of Diabetes, Cardiovascular Disease and Stroke (NPCDCS)/national-ncd-portal-diabetes-follow-up-status/national-ncd-portal-diabetes-follow-up-status.component';
import { NATIONALNCDPORTALNEWHYPERTENSIONONTREATMENTSTATUSTwoMonthsComponent } from './components/National Programme for Prevention and Control of Diabetes, Cardiovascular Disease and Stroke (NPCDCS)/national-ncd-portal-new-hypertension-on-treatment-status-two-months/national-ncd-portal-new-hypertension-on-treatment-status-two-months.component';
import { NATIONALNCDPORTALHYPERTENSIONFOLLOWUPSTATUSTwoMonthsComponent } from './components/National Programme for Prevention and Control of Diabetes, Cardiovascular Disease and Stroke (NPCDCS)/national-ncd-portal-hypertension-follow-up-status-two-months/national-ncd-portal-hypertension-follow-up-status-two-months.component';
import { STATUSDAYCARECHEMOTHERAPYFUNCTIONALITYComponent } from './components/National Programme for Prevention and Control of Diabetes, Cardiovascular Disease and Stroke (NPCDCS)/status-daycare-chemotherapy-functionality/status-daycare-chemotherapy-functionality.component';
import { DAYCARECHEMOTHERAPYTwoMonthsComponent } from './components/National Programme for Prevention and Control of Diabetes, Cardiovascular Disease and Stroke (NPCDCS)/daycare-chemotherapy-two-months/daycare-chemotherapy-two-months.component';
import { CERVICALCANCERSCREENINGINDHANDPRECANCERTREATMENTComponent } from './components/National Programme for Prevention and Control of Diabetes, Cardiovascular Disease and Stroke (NPCDCS)/cervical-cancer-screening-in-dh-and-precancer-treatment/cervical-cancer-screening-in-dh-and-precancer-treatment.component';
import { CervicalCancerScreeningAndPrecancerTreatmentTwoMonthsComponent } from './components/National Programme for Prevention and Control of Diabetes, Cardiovascular Disease and Stroke (NPCDCS)/cervical-cancer-screening-and-precancer-treatment-two-months/cervical-cancer-screening-and-precancer-treatment-two-months.component';
import { HEARTATTACKSTEMITHROMBOLYSISTREATMENTAVAILABILITYSTATUSComponent } from './components/National Programme for Prevention and Control of Diabetes, Cardiovascular Disease and Stroke (NPCDCS)/heart-attack-stemi-thrombolysis-treatment-availability-status/heart-attack-stemi-thrombolysis-treatment-availability-status.component';
import { DISTRICTHOSPITALMENTALHEALTHOPDComponent } from './components/National Mental Health Program (NMHP)/district-hospital-mental-health-opd/district-hospital-mental-health-opd.component';
import { NMHPDISTRICTHOSPITALIPDDAYCAREFACILITYComponent } from './components/National Mental Health Program (NMHP)/nmhp-district-hospital-ipd-daycare-facility/nmhp-district-hospital-ipd-daycare-facility.component';
import { CHCANDPHCMENTALHEALTHOPDComponent } from './components/National Mental Health Program (NMHP)/chc-and-phc-mental-health-opd/chc-and-phc-mental-health-opd.component';
import { MENTALHEALTHSCREENINGATHWCComponent } from './components/National Mental Health Program (NMHP)/mental-health-screening-at-hwc/mental-health-screening-at-hwc.component';
import { ReportOfDialysisUnitUnderPMNDPComponent } from './components/National Mental Health Program (NMHP)/report-of-dialysis-unit-under-pmndp/report-of-dialysis-unit-under-pmndp.component';
import { PMNDPPortalEntryStatusDistrictWiseComponent } from './components/National Mental Health Program (NMHP)/pmndp-portal-entry-status-district-wise/pmndp-portal-entry-status-district-wise.component';
import { PradhanMantriNationalDialysisProgramPMNDPComponent } from './components/National Mental Health Program (NMHP)/pradhan-mantri-national-dialysis-program-pmndp/pradhan-mantri-national-dialysis-program-pmndp.component';
import { StatusOfDialysisUnitInOtherSourceDMFCSRJDSComponent } from './components/National Mental Health Program (NMHP)/status-of-dialysis-unit-in-other-source-dmf-csr-jds/status-of-dialysis-unit-in-other-source-dmf-csr-jds.component';
import { NATIONALORALHEALTHStatusOfOPDToThePatientComponent } from './components/National Oral health programme(NOHP)/national-oral-health-status-of-opd-to-the-patient/national-oral-health-status-of-opd-to-the-patient.component';
import { StatusOfDentalProceduresToThePatientsComponent } from './components/National Oral health programme(NOHP)/status-of-dental-procedures-to-the-patients/status-of-dental-procedures-to-the-patients.component';
import { GeriatricElderlyWardStatusComponent } from './components/National Programme for Health Care for the Elderly (NPHCE)/geriatric-elderly-ward-status/geriatric-elderly-ward-status.component';
import { AchievementsOfTobaccoCessationCenterTCCOPDComponent } from './components/National Tobacco Control Programme(NTCP)/achievements-of-tobacco-cessation-center-tcc-opd/achievements-of-tobacco-cessation-center-tcc-opd.component';
import { TCCOPDTargetsPerMonthAnuallyComponent } from './components/National Tobacco Control Programme(NTCP)/tcc-opd-targets-per-month-anually/tcc-opd-targets-per-month-anually.component';
import { TobaccoFreeEducationalInstitutionTOFEIStatusComponent } from './components/National Tobacco Control Programme(NTCP)/tobacco-free-educational-institution-tofei-status/tobacco-free-educational-institution-tofei-status.component';
import { AudiometryFacilitiesComponent } from './components/National Program for Prevention and Control of Deafness (NPPCD)/audiometry-facilities/audiometry-facilities.component';
import { NumberOfCasesInvestigationsComponent } from './components/National Program for Prevention and Control of Deafness (NPPCD)/number-of-cases-investigations/number-of-cases-investigations.component';
import { HWCsOperationalStatusComponent } from './components/Comprehensive Primary Healthcare(CPHC)/hwcs-operational-status/hwcs-operational-status.component';
import { AverageNumberOfMedicineAvailableInSHCHWCComponent } from './components/Comprehensive Primary Healthcare(CPHC)/average-number-of-medicine-available-in-shc-hwc/average-number-of-medicine-available-in-shc-hwc.component';
import { AverageNumberOfMedicineAvailableInPHCHWCComponent } from './components/Comprehensive Primary Healthcare(CPHC)/average-number-of-medicine-available-in-phc-hwc/average-number-of-medicine-available-in-phc-hwc.component';
import { AverageNumberOfDiagnosticsAvailableInSHCHWCComponent } from './components/Comprehensive Primary Healthcare(CPHC)/average-number-of-diagnostics-available-in-shc-hwc/average-number-of-diagnostics-available-in-shc-hwc.component';
import { AverageNumberOfDiagnosticsAvailableInPHCHWCComponent } from './components/Comprehensive Primary Healthcare(CPHC)/average-number-of-diagnostics-available-in-phc-hwc/average-number-of-diagnostics-available-in-phc-hwc.component';
import { WellnessActivityYearAveragePerHWCMonthNeedToAverageActivityPerMonthPerHWCComponent } from './components/Comprehensive Primary Healthcare(CPHC)/wellness-activity-year-average-per-hwc-month-need-to-average-activity-per-month-per-hwc/wellness-activity-year-average-per-hwc-month-need-to-average-activity-per-month-per-hwc.component';
import { FYESanjeevaniConsultationCompletedConsultationPerFacilityPerMonthComponent } from './components/Comprehensive Primary Healthcare(CPHC)/fy-esanjeevani-consultation-completed-consultation-per-facility-per-month/fy-esanjeevani-consultation-completed-consultation-per-facility-per-month.component';
import { UHWCOperationalStatusComponent } from './components/National Urban Health Mission/uhwc-operational-status/uhwc-operational-status.component';
import { UHWCHRStatusComponent } from './components/National Urban Health Mission/uhwc-hr-status/uhwc-hr-status.component';
import { PolyclinicOPDAndVisitStatusComponent } from './components/National Urban Health Mission/polyclinic-opd-and-visit-status/polyclinic-opd-and-visit-status.component';
import { OPDStatusTwoMonthsComponent } from './components/National Urban Health Mission/opd-status-two-months/opd-status-two-months.component';
import { DeliveryStatusTwoMonthsComponent } from './components/National Urban Health Mission/delivery-status-two-months/delivery-status-two-months.component';
import { LabTestStatusTwoMonthsComponent } from './components/National Urban Health Mission/lab-test-status-two-months/lab-test-status-two-months.component';
import { DistrictWiseContractualVACANTPostUnderAIDSControlProgrammeNACOCGSACSComponent } from './components/Chhattisgarh State AIDS Control Society/district-wise-contractual-vacant-post-under-aids-control-programme-naco-cgsacs/district-wise-contractual-vacant-post-under-aids-control-programme-naco-cgsacs.component';
import { DistrictWiseMarijoKiAverageComponent } from './components/C.M. hat bajar yojana/district-wise-marijo-ki-average/district-wise-marijo-ki-average.component';
import { DistrictWiseEntryAndTritmentComponent } from './components/C.M. hat bajar yojana/district-wise-entry-and-tritment/district-wise-entry-and-tritment.component';
import { DistrictWiseViheiclesComponent } from './components/C.M. hat bajar yojana/district-wise-viheicles/district-wise-viheicles.component';
import { HatBajarLatitudeAndLongitudeComponent } from './components/C.M. hat bajar yojana/hat-bajar-latitude-and-longitude/hat-bajar-latitude-and-longitude.component';
import { NationalHealthMissionChhattisgarhRANKINGAsPerFMRReportAsOnFYInLakhComponent } from './components/NHM - Finance/national-health-mission-chhattisgarh-ranking-as-per-fmr-report-as-on-fy.in-lakh/national-health-mission-chhattisgarh-ranking-as-per-fmr-report-as-on-fy.in-lakh.component';
import { AllDistrictFinancialReportComponent } from './components/NHM - Finance/all-district-financial-report/all-district-financial-report.component';
import { NationalHealthMissionFinancialProgressReportComponent } from './components/NHM - Finance/national-health-mission-financial-progress-report/national-health-mission-financial-progress-report.component';
import { NationalHealthMissionChhattisgarhRANKINGAsPerFMRReportAsOnFYInLakhComponent2 } from './components/NHM - Financial Progress Report Till the now (F Y )/national-health-mission-chhattisgarh-ranking-as-per-fmr-report-as-on-fy.in-lakh/national-health-mission-chhattisgarh-ranking-as-per-fmr-report-as-on-fy.in-lakh.component';
import { NationalHealthMissionFinancialProgressReportComponent2 } from './components/NHM - Financial Progress Report Till the now (F Y )/national-health-mission-financial-progress-report/national-health-mission-financial-progress-report.component';
import { HIVTBCoordinationCommitteeMeetingComponent } from './components/Chhattisgarh State AIDS Control Society/hiv-tb-coordination-committee-meeting/hiv-tb-coordination-committee-meeting.component';
import { HIVTBCrossReferralComponent } from './components/Chhattisgarh State AIDS Control Society/hiv-tb-cross-referral/hiv-tb-cross-referral.component';
import { NABLCertificationStatusOfICTCsChhattisgarhComponent } from './components/NABL Certification of ICTC/nabl-certification-status-of-ictcs-chhattisgarh/nabl-certification-status-of-ictcs-chhattisgarh.component';
import { DocumentsRequiredForNABLCertificationComponent } from './components/NABL Certification of ICTC/documents-required-for-nabl-certification/documents-required-for-nabl-certification.component';
import { DistrictWiseLFUAndViralLoadPendencyComponent } from './components/NABL Certification of ICTC/district-wise-lfu-and-viral-load-pendency/district-wise-lfu-and-viral-load-pendency.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CommonComponent,
    VHSNDUHSNDMonitoringComponent,
    ANCELAComponent,
    ANCFIRSTComponent,
    PregnantWomenReceivedFOUROrMoreANCComponent,
    TreatmentOfSevereAnemiaAgainstDetectedComponent,
    IFADistributionComponent,
    PWGivenOneAlbendazoleTabletAfterFIRSTTrimesterComponent,
    PWReceivedTSZCalciumTabletComponent,
    StatusOfInstitutionalDeliveryAgainstPELAComponent,
    StatusofANCVsInstitutionalDeliveryComponent,
    StatusofCSectionagainstInstitutionalDeliveryagainstPELAComponent,
    HighRiskPregnancyComponent,
    HighRiskPregnancyIdentificationComponent,
    StatusofHRPreportingintheStateComponent,
    HRPbifurcationStatelevelComponent,
    Topdistrictswithmorethan100HRPregisteredinTWOMONTHSComponent,
    FIRSTREFERRALUNITFRUComponent,
    MCHWingComponent,
    StatusofJSYpaymentagainstROPPELAComponent,
    StatusofJSSKdietagainstROPPELAComponent,
    StatusofMDSRReviewComponent,
    BloodTransfusionServicesinStateFacilitiesComponent,
    StateScenarioBloodCollectionComponent,
    BloodCollectioninChhattisgarhStateLASTYEARComponent,
    BloodCollectioninChhattisgarhStateTWOMONTHSComponent,
    StatusofBloodStorageUnitsinFRUCHCsANDCHsComponent,
    GovtBloodCenterCampCollectionLASTYEARComponent,
    SickleCellscreeninginSickleCellPrabandhanunitComponent,
    INSPECTIONOFEACHCENTERSINEVERYQUARTERComponent,
    DISTRICTADVISORYCOMMITTEEMEETINGINEVERYTWOMONTHSComponent,
    SNCUAdmissionBORANDOutcomeComponent,
    CauseofDeathProfileTWOMONTHSComponent,
    BedOccupancyRateatNutritionRehabilitationCentersComponent,
    SuccessfulDischargeRateatNutritionRehabilitationCentresComponent,
    NutritionRehabilitationCenterComponent,
    AMBPEROfChildrenSFNMonthsgivenETDosesofIFAsyrupeverymonthComponent,
    PERofChildrenFIVENINEyearsgivenFOURFIVEIFAtabletseverymonthComponent,
    CoverageofinSchoolbeneficiariesunderWIFSProgrammeComponent,
    CoverageofoutOfSchoolgirlsunderWIFSProgrammeComponent,
    AnemiaMuktBharatAMBComponent,
    StatusofchildrenScreeningSchoolAWCLASTYEARDataSourceRBSKPortalComponent,
    StatusofAWCvisitedANDchildrenScreeningAprilMayYEARComponent,
    TreatmentStatusinallCategoryABCDEYEARTWOMONTHSComponent,
    ObservationANDIssuesandRecommendationsComponent,
    FullImmunizationCoverageinPERComponent,
    AdherencetoOpenvialpolicyComponent,
    DiscardofRIvaccinedosesComponent,
    TrainingofHealthandwellnessambassadoSHWPComponent,
    PermanentFPServicesStatusTWOMONTHSSComponent,
    SpacingFPServicesStatusTWOMONTHSComponent,
    PPIUCDAcceptancePERComponent,
    PERInjectableMPAUsersAmongEligiblecouplesComponent,
    KeyFPPrioritiesComponent,
    SuspectExaminationRateTHREEMONTHSComponent,
    PercentageofNotificationachievedagainstTargetComponent,
    SuccessRateOFYEARComponent,
    NPYPaymentOFYEARComponent,
    AdoptionStatusOfTBPatientsByNikshayMitraComponent,
    NewCaseFYComponent,
    PercentageOfGTWODAmongNewCaseComponent,
    PercentageOfChildCaseAmongNewCaseComponent,
    PercentageOfMBCaseAmongNewCaseComponent,
    StatusOfEligibleCasesForRCSAandRCSPerformedTillFYComponent,
    TargetVsAchievementBloodSlideRDTYEARComponent,
    IndoorResidualSprayPopulationCoverageInTWORoundComponent,
    DengueCasesYEARComponent,
    MorbidityManagementDiseasePreventionServicesForLymphedemaCasesComponent,
    MorbidityManagementStatusComponent,
    HydrocelectomyStatusComponent,
    AcuteEncephalitisSyndromeJapaneseEncephalitisComponent,
    IHIPReportingStatusComponent,
    CataractSurgeryPublicSectorANDPvtSectorAgainstELAComponent,
    SchoolEyeScreeningProvidedFreeGlassesComponent,
    CataractSurgeryPublicSectorANDPvtSectorAgainstELATWOMONTHSComponent,
    SchoolEyeScreeningProvidedFreeGlassesTWOMONTHSSchoolVacationGoingOnComponent,
    CataractBacklogFreeDistrictYearComponent,
    NationalNCDPortalActiveUserStatusComponent,
    NEWENROLMENTSTATUSComponent,
    ABHAIDSTATUSComponent,
    NATIONALNCDPORTALSCREENINGSTATUSComponent,
    NATIONALNCDPORTALRESCREENINGSTATUSComponent,
    NATIONALNCDPORTALNEWDIABETESTREATMENTSTATUSComponent,
    NATIONALNCDPORTALDIABETESFOLLOWUPSTATUSComponent,
    NATIONALNCDPORTALNEWHYPERTENSIONONTREATMENTSTATUSTwoMonthsComponent,
    NATIONALNCDPORTALHYPERTENSIONFOLLOWUPSTATUSTwoMonthsComponent,
    STATUSDAYCARECHEMOTHERAPYFUNCTIONALITYComponent,
    DAYCARECHEMOTHERAPYTwoMonthsComponent,
    CERVICALCANCERSCREENINGINDHANDPRECANCERTREATMENTComponent,
    CervicalCancerScreeningAndPrecancerTreatmentTwoMonthsComponent,
    HEARTATTACKSTEMITHROMBOLYSISTREATMENTAVAILABILITYSTATUSComponent,
    DISTRICTHOSPITALMENTALHEALTHOPDComponent,
    NMHPDISTRICTHOSPITALIPDDAYCAREFACILITYComponent,
    CHCANDPHCMENTALHEALTHOPDComponent,
    MENTALHEALTHSCREENINGATHWCComponent,
    ReportOfDialysisUnitUnderPMNDPComponent,
    PMNDPPortalEntryStatusDistrictWiseComponent,
    PradhanMantriNationalDialysisProgramPMNDPComponent,
    StatusOfDialysisUnitInOtherSourceDMFCSRJDSComponent,
    NATIONALORALHEALTHStatusOfOPDToThePatientComponent,
    StatusOfDentalProceduresToThePatientsComponent,
    GeriatricElderlyWardStatusComponent,
    AchievementsOfTobaccoCessationCenterTCCOPDComponent,
    TCCOPDTargetsPerMonthAnuallyComponent,
    TobaccoFreeEducationalInstitutionTOFEIStatusComponent,
    AudiometryFacilitiesComponent,
    NumberOfCasesInvestigationsComponent,
    HWCsOperationalStatusComponent,
    AverageNumberOfMedicineAvailableInSHCHWCComponent,
    AverageNumberOfMedicineAvailableInPHCHWCComponent,
    AverageNumberOfDiagnosticsAvailableInSHCHWCComponent,
    AverageNumberOfDiagnosticsAvailableInPHCHWCComponent,
    WellnessActivityYearAveragePerHWCMonthNeedToAverageActivityPerMonthPerHWCComponent,
    FYESanjeevaniConsultationCompletedConsultationPerFacilityPerMonthComponent,
    UHWCOperationalStatusComponent,
    UHWCHRStatusComponent,
    PolyclinicOPDAndVisitStatusComponent,
    OPDStatusTwoMonthsComponent,
    DeliveryStatusTwoMonthsComponent,
    LabTestStatusTwoMonthsComponent,
    NationalHealthMissionChhattisgarhRANKINGAsPerFMRReportAsOnFYInLakhComponent,
    NationalHealthMissionFinancialProgressReportComponent,
    AllDistrictFinancialReportComponent,
    NationalHealthMissionChhattisgarhRANKINGAsPerFMRReportAsOnFYInLakhComponent2,
    NationalHealthMissionFinancialProgressReportComponent2,
    DistrictWiseContractualVACANTPostUnderAIDSControlProgrammeNACOCGSACSComponent,
    DistrictWiseMarijoKiAverageComponent,
    HIVTBCoordinationCommitteeMeetingComponent,
    HIVTBCrossReferralComponent,
    NABLCertificationStatusOfICTCsChhattisgarhComponent,
    DocumentsRequiredForNABLCertificationComponent,
    DistrictWiseLFUAndViralLoadPendencyComponent,
    DistrictWiseEntryAndTritmentComponent,
    DistrictWiseViheiclesComponent,
    HatBajarLatitudeAndLongitudeComponent
  ],
  imports: [
    CommonModule,
    StateRoutingModule,
    MatSidenavModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatNativeDateModule,
    MatMenuModule,
    MatSelectModule,
    MatDialogModule,
    MatCardModule
  ],
  providers:[DatePipe]
})
export class StateModule { }
