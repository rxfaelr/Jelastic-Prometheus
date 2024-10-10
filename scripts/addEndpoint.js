//@req(nodeGroup, name, port)

var PROTOCOL = getParam("protocol", "TCP"),
    APPID = getParam("TARGET_APPID"),
    SESSION = getParam("session"),
    bEndPointsEnabled,
    sSuccessText = "",
    nNodesCount,
    oEnvInfo,
    oResp,
    i;

oResp = jelastic.billing.account.GetQuotas("environment.endpoint.enabled");

if (!oResp || oResp.result != 0) {
    return oResp;
}

bEndPointsEnabled = oResp.array[0].value;

oEnvInfo = jelastic.environment.environment.GetEnvInfo(APPID, session);

if (!oEnvInfo || oEnvInfo.result != 0) {
    return oEnvInfo;
}

nNodesCount = oEnvInfo.nodes.length;

if (bEndPointsEnabled) {
    for (i = 0; i < nNodesCount; i += 1) {
        if (oEnvInfo.nodes[i].nodeGroup == nodeGroup) {
            oResp = jelastic.environment.environment.AddEndpoint(APPID, session, oEnvInfo.nodes[i].id, port, PROTOCOL, name);

            if (!oResp || oResp.result != 0) {
                return oResp;
            }
        }
    }

    sSuccessText = "${nodes.nginxphp[0].id}" + "${env.domain}" + oResp.object.publicPort + "";
} else {
    sSuccessText = "${nodes.nginxphp[0].id}" + "${env.domain}" + oResp.object.publicPort + "";
}

return {
    result: "success",
    message: sSuccessText,
    email: sSuccessText
};