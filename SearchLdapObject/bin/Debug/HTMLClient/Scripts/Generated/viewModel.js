/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function Browse(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Browse screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.Browse.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Browse", parameters);
    }

    function BrowseActiveDirectoryUsers(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseActiveDirectoryUsers screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ActiveDirectoryUsers" type="msls.VisualCollection" elementType="msls.application.ActiveDirectoryUser">
        /// Gets the activeDirectoryUsers for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseActiveDirectoryUsers.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseActiveDirectoryUsers", parameters);
    }

    function ViewActiveDirectoryUser(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewActiveDirectoryUser screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ActiveDirectoryUser" type="msls.application.ActiveDirectoryUser">
        /// Gets or sets the activeDirectoryUser for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewActiveDirectoryUser.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewActiveDirectoryUser", parameters);
    }

    msls._addToNamespace("msls.application", {

        Browse: $defineScreen(Browse, [
        ], [
        ]),

        BrowseActiveDirectoryUsers: $defineScreen(BrowseActiveDirectoryUsers, [
            {
                name: "ActiveDirectoryUsers", kind: "collection", elementType: lightSwitchApplication.ActiveDirectoryUser,
                createQuery: function () {
                    return this.dataWorkspace.UtilitiesData.ActiveDirectoryUsers;
                }
            }
        ], [
        ]),

        ViewActiveDirectoryUser: $defineScreen(ViewActiveDirectoryUser, [
            { name: "ActiveDirectoryUser", kind: "local", type: lightSwitchApplication.ActiveDirectoryUser }
        ], [
        ]),

        showBrowse: $defineShowScreen(function showBrowse(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Browse screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Browse", parameters, options);
        }),

        showBrowseActiveDirectoryUsers: $defineShowScreen(function showBrowseActiveDirectoryUsers(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseActiveDirectoryUsers screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseActiveDirectoryUsers", parameters, options);
        }),

        showViewActiveDirectoryUser: $defineShowScreen(function showViewActiveDirectoryUser(ActiveDirectoryUser, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewActiveDirectoryUser screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewActiveDirectoryUser", parameters, options);
        })

    });

}(msls.application));
