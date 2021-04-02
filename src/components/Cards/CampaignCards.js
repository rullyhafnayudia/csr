import React from "react";

// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardText,
    Container,
    Progress,
    Row,
    Col,
    UncontrolledTooltip,
} from "reactstrap";

function CampaignCards(props) {
    const numberFormat = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
    const dateFormat = new Intl.DateTimeFormat("id-ID", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    })

    const { program } = props;
    const percentAchievement = program.target ? Math.ceil(program.achievement * 100 / program.target) : 100;
    return(
        <>
            <Card>
                <CardImg
                    alt="..."
                    src={program.image ? program.image : require("assets/img/theme/img-1-1000x900.jpg").default}
                    top
                    className="img-fluid mx-auto d-block"
                    style={{ height: "300px", width: "400px", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }}
                />
                <CardBody>
                <CardTitle name="campaign_title" className="h2 mb-0 mt-2">
                    {program.name}
                </CardTitle>
                <small name="date" className="text-muted">
                    {dateFormat.format(new Date(program.dateStart))}
                </small>
                <CardText className="mt-4" 
                    style=
                    {{ 
                        maxWidth: '100%',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 1,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis', 
                    }}>
                    {program.description}
                </CardText>
                <Progress
                    className="progress-xs mt-4 mb-1"
                    color="orange"
                    max="100"
                    value={percentAchievement}
                />
                <small name="date" className="text-muted text-right">
                    {numberFormat.format(program.achievement)} / {numberFormat.format(program.target)}
                </small>
                <div className="mt-4">
                    {program.category ? (
                        <Badge color="warning" pill>
                            {program.category.displayField}
                        </Badge>
                    ) : ('<>')}
                </div>
                <Button
                    className="my-2 mt-4"
                    color="default"
                    href={`/home/single-campaign/${program.id}`}
                    block
                >
                    Donasi
                </Button>
                </CardBody>
            </Card>
        </>
    );
}

export default CampaignCards;