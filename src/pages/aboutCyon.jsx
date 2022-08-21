import React from "react";

const AboutCyon = () => {
    const activities = ["Workshops and seminars",
        "Rallies and conventions",
        "Camps",
        "Skills Acquisition",
        "Cultural and sports festivals",
        "Exchanges", "excursions and pilgrimages",
        "Charity works and helping the needy",
        "Visiting prisons and praying for inmates",
        "Youth retreat", "counseling"]

    return (
        <div className="container mt-4 scrollable dash-layer">
            <div className="row">
                <div className="col-md-12">
                    <h3>About CYON</h3>
                    <div className="mt-2">
                        <h5>History</h5>
                        <p>
                            CYO Nigeria was founded in 1985 to create a youth organization for young Catholics in Nigeria. CYO emerged in the context of a concern of the Catholic Bishops' Conference of Nigeria (CBCN) that the young Catholics and local Catholic youth organizations in Nigeria should celebrate the International Youth Year (IYY) declared by the United Nations in 1985. Several meetings of chaplains responsible for youth affairs and youths leaders from the various dioceses of Nigeria took place to plan a national Catholic youth rally. From this type of rallies finally CYO Nigeria emerged as a nationwide umbrella for Catholic youth work in Nigeria. In 2010, at the General Assembly in Munich, CYO Nigeria was adopted as a full member to the international umbrella of Catholic youth organizations "Fimcap". Currently, CYO Nigeria is building up a cooperation with a Muslim youth organization to foster peace in the country and to begin an inter-religious dialogue.
                        </p>

                        <h5>Activities</h5>
                        <p>
                            <ul>
                                {
                                    activities.map((activity, i) => <li key={i}>{activity}</li>)
                                }
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCyon;