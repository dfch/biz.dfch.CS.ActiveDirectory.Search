/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function Item(entitySet) {
        /// <summary>
        /// Represents the Item entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this item.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this item.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this item.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this item.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this item.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this item.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this item.
        /// </field>
        /// <field name="details" type="msls.application.Item.Details">
        /// Gets the details for this item.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ActiveDirectoryUser(entitySet) {
        /// <summary>
        /// Represents the ActiveDirectoryUser entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this activeDirectoryUser.
        /// </param>
        /// <field name="cn" type="String">
        /// Gets or sets the cn for this activeDirectoryUser.
        /// </field>
        /// <field name="description" type="String">
        /// Gets or sets the description for this activeDirectoryUser.
        /// </field>
        /// <field name="distinguishedName" type="String">
        /// Gets or sets the distinguishedName for this activeDirectoryUser.
        /// </field>
        /// <field name="groupType" type="Number">
        /// Gets or sets the groupType for this activeDirectoryUser.
        /// </field>
        /// <field name="name" type="String">
        /// Gets or sets the name for this activeDirectoryUser.
        /// </field>
        /// <field name="sn" type="String">
        /// Gets or sets the sn for this activeDirectoryUser.
        /// </field>
        /// <field name="givenName" type="String">
        /// Gets or sets the givenName for this activeDirectoryUser.
        /// </field>
        /// <field name="department" type="String">
        /// Gets or sets the department for this activeDirectoryUser.
        /// </field>
        /// <field name="displayName" type="String">
        /// Gets or sets the displayName for this activeDirectoryUser.
        /// </field>
        /// <field name="mail" type="String">
        /// Gets or sets the mail for this activeDirectoryUser.
        /// </field>
        /// <field name="objectGUID" type="String">
        /// Gets or sets the objectGUID for this activeDirectoryUser.
        /// </field>
        /// <field name="objectSID" type="String">
        /// Gets or sets the objectSID for this activeDirectoryUser.
        /// </field>
        /// <field name="sAMAccountName" type="String">
        /// Gets or sets the sAMAccountName for this activeDirectoryUser.
        /// </field>
        /// <field name="sAMAccountType" type="Number">
        /// Gets or sets the sAMAccountType for this activeDirectoryUser.
        /// </field>
        /// <field name="uSNChanged" type="String">
        /// Gets or sets the uSNChanged for this activeDirectoryUser.
        /// </field>
        /// <field name="uSNCreated" type="String">
        /// Gets or sets the uSNCreated for this activeDirectoryUser.
        /// </field>
        /// <field name="whenChanged" type="Date">
        /// Gets or sets the whenChanged for this activeDirectoryUser.
        /// </field>
        /// <field name="whenCreated" type="Date">
        /// Gets or sets the whenCreated for this activeDirectoryUser.
        /// </field>
        /// <field name="details" type="msls.application.ActiveDirectoryUser.Details">
        /// Gets the details for this activeDirectoryUser.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="Items" type="msls.EntitySet">
        /// Gets the Items entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };

    function UtilitiesData(dataWorkspace) {
        /// <summary>
        /// Represents the UtilitiesData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="ActiveDirectoryUsers" type="msls.EntitySet">
        /// Gets the ActiveDirectoryUsers entity set.
        /// </field>
        /// <field name="details" type="msls.application.UtilitiesData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="UtilitiesData" type="msls.application.UtilitiesData">
        /// Gets the UtilitiesData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        Item: $defineEntity(Item, [
            { name: "Id", type: Number },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        ActiveDirectoryUser: $defineEntity(ActiveDirectoryUser, [
            { name: "cn", type: String },
            { name: "description", type: String },
            { name: "distinguishedName", type: String },
            { name: "groupType", type: Number },
            { name: "name", type: String },
            { name: "sn", type: String },
            { name: "givenName", type: String },
            { name: "department", type: String },
            { name: "displayName", type: String },
            { name: "mail", type: String },
            { name: "objectGUID", type: String },
            { name: "objectSID", type: String },
            { name: "sAMAccountName", type: String },
            { name: "sAMAccountType", type: Number },
            { name: "uSNChanged", type: String },
            { name: "uSNCreated", type: String },
            { name: "whenChanged", type: Date },
            { name: "whenCreated", type: Date }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "Items", elementType: Item }
        ], [
            {
                name: "Items_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Items },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Items(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            }
        ]),

        UtilitiesData: $defineDataService(UtilitiesData, lightSwitchApplication.rootUri + "/UtilitiesData.svc", [
            { name: "ActiveDirectoryUsers", elementType: ActiveDirectoryUser }
        ], [
            {
                name: "ActiveDirectoryUsers_SingleOrDefault", value: function (cn) {
                    return new $DataServiceQuery({ _entitySet: this.ActiveDirectoryUsers },
                        lightSwitchApplication.rootUri + "/UtilitiesData.svc" + "/ActiveDirectoryUsers(" + "cn=" + $toODataString(cn, "String?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData },
            { name: "UtilitiesData", type: UtilitiesData }
        ])

    });

}(msls.application));
