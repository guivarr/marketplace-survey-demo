function getStudyData() {

    return JSON.parse(
        sessionStorage.getItem(
            "researchData"
        )
    );

}

function saveStudyData(data) {

    sessionStorage.setItem(
        "researchData",
        JSON.stringify(data)
    );

}

function trackEvent(type, details = {}) {

    const data = getStudyData();

    if (!data) return;

    data.events.push({

        type: type,

        timestamp:
            new Date().toISOString(),

        page:
            window.location.pathname,

        ...details

    });

    saveStudyData(data);

}
