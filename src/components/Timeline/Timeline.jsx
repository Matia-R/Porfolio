import "./Timeline.css";
import { ReactComponent as WorkIcon } from "./img/work_icon.svg";
import { ReactComponent as EducationIcon } from "./img/education_icon.svg";
import { ReactComponent as ExtracurricularIcon } from "./img/extracurricular_icon.svg"

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import timelineItems from "./TimelineItems";

function Timeline() {

    let workIconStyle = { background: "rgba(0,149,255)" };
    let educationIconStyle = { background: "rgb(9, 241, 237)" };
    let extracurricularIconStyle = { background: "rgb(113, 89, 219)" };

    return (
        <div className="timelineContainer">
            <VerticalTimeline>
                {
                    timelineItems.map((item, index) => {

                        let iconStyle, icon;

                        switch (item.type) {
                            default:
                                iconStyle = workIconStyle;
                                icon = <WorkIcon />;
                                break;
                            case "work":
                                iconStyle = workIconStyle;
                                icon = <WorkIcon />;
                                break;
                            case "education":
                                iconStyle = educationIconStyle;
                                icon = <EducationIcon />;
                                break;
                            case "extracurricular":
                                iconStyle = extracurricularIconStyle;
                                icon = <ExtracurricularIcon />;
                                break;
                        }

                        return (
                            <VerticalTimelineElement
                                key={index}
                                date={item.date}
                                dateClassName="date"
                                iconStyle={iconStyle}
                                icon={icon}
                            >
                                <h3>{item.title}</h3>
                                <h5>{item.organization}</h5>
                                <h5>{item.location}</h5>
                                <p style={{ fontWeight: 'bolder' }}>{item.description}</p>
                            </VerticalTimelineElement>
                        );
                    })
                }
            </VerticalTimeline>
        </div>
    )
}

export default Timeline;