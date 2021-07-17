# Claims

## Claim

|Claim|Id|
|Claim|ClaimNumber|
|Claim|CreatedBy|
|Claim|CreatedOn|
|Claim|RowVersion|

## Pending Claim

|PendingClaim|Id|
|PendingClaim|AdjusterName|
|PendingClaim|AdjusterReceivesBilling|
|PendingClaim|AppointmentDate|
|PendingClaim|CatastrophicEvent|
|PendingClaim|City|
|PendingClaim|ClaimNumber|
|PendingClaim|CompanyName|
|PendingClaim|EndTime|
|PendingClaim|FileName|
|PendingClaim|InsuredLastName|
|PendingClaim|PostalCode|
|PendingClaim|RequiresHAAG|
|PendingClaim|RequiresMultipleTechs|
|PendingClaim|ServiceTypes|
|PendingClaim|StartTime|
|PendingClaim|State|
|PendingClaim|StreetAddress|
|PendingClaim|UploadDateTime|
|PendingClaim|UserId (FK_PendingClaim_User_UserId)|
|PendingClaim|WasDeleted|
|PendingClaim|RowVersion|

## External Claim

|ExternalClaim|Id|
|ExternalClaim|AdjusterEmail|
|ExternalClaim|AdjusterName|
|ExternalClaim|AdjusterPhone|
|ExternalClaim|AppointmentDate|
|ExternalClaim|BillingContact|
|ExternalClaim|BillingEmail|
|ExternalClaim|BillingPhone|
|ExternalClaim|CatastrophicEvent|
|ExternalClaim|City|
|ExternalClaim|ClaimNumber|
|ExternalClaim|CompanyName|
|ExternalClaim|CreatedBy (FK_ExternalClaim_User_CreatedBy)|
|ExternalClaim|EndTime|
|ExternalClaim|InsuredLastName|
|ExternalClaim|IsIndependentAdjuster|
|ExternalClaim|IsReinspect|
|ExternalClaim|Notes|
|ExternalClaim|Phone|
|ExternalClaim|PostalCode|
|ExternalClaim|ProjectId (FK_ExternalClaim_Project_ProjectId)|
|ExternalClaim|RequiresHaag|
|ExternalClaim|StartTime|
|ExternalClaim|StateId (FK_ExternalClaim_State_StateId)|
|ExternalClaim|StreetAddress|
|ExternalClaim|Suite|
|ExternalClaim|TransactionId|
|ExternalClaim|UploadDateTime|
|ExternalClaim|RowVersion|
|ExternalClaim|XactimateStatusId (FK_ExternalClaim_XactimateStatus_XactimateStatusId)|
|ExternalClaim|VendorTypeId (FK_ExternalClaim_MasterVendorType_VendorTypeId)|
|ExternalClaim|SymbilityAssignmentId|
|ExternalClaim|ValidationError|
|ExternalClaim|AdjusterId|
|ExternalClaim|AdjusterReceivesBill|
|ExternalClaim|BillingContactId|
|ExternalClaim|ClaimId|
|ExternalClaim|CompanyBillingContactId|
|ExternalClaim|CompanyId|
|ExternalClaim|IsCompanyOnExternalForm|

ExternalClai|Asset	AssetId (FK_ExternalClaimAsset_Asset_AssetId)|
ExternalClaimAsset	ExternalClaimId (FK_ExternalClaimAsset_ExternalClaim_ExternalClaimId)


ExternalClaimDamageType	ExternalClaimId (FK_ExternalClaimDamageType_ExternalClaim_ExternalClaimId)
ExternalClaimDamageType	DamageTypeId
ExternalClaimDamageType	OtherInspection

ExternalClaimServiceType	AvailableServiceTypeId (FK_ExternalClaimServiceType_AvailableServiceType_AvailableServiceTypeId)
ExternalClaimServiceType	ExternalClaimId (FK_ExternalClaimServiceType_ExternalClaim_ExternalClaimId)
