import Tooltip from "../components/Tooltip/Tooltip"
import Badge from "../components/Badges/Badge"
import { SlBadge } from "react-icons/sl";
import { FaApple,FaBomb,FaCompass,FaDatabase,FaDiceD6,FaGithub,FaGoogleDrive,FaGrinStars,FaUserSecret,FaWallet } from "react-icons/fa";

export default function TooltipsShowcase() {
    return (
        <>
            <span className="heading md">
                Tooltips
            </span>
            <div className="tooltips-container">
                <span className="heading sm">Bold</span>
                <div className="flex row">
                    <Tooltip
                        icon={FaApple}
                        title="Default Bold Variant"
                        subtitle="This is a default colored tooltip that auto-closes."
                        close={true}>
                        <Badge>
                            Default
                        </Badge>
                    </Tooltip>

                    <Tooltip
                        icon={FaBomb}
                        title="Default Bold Variant"
                        subtitle="This is a blue colored tooltip that auto-closes."
                        col="blue"
                        close={true}>
                        <Badge>
                            Blue
                        </Badge>
                    </Tooltip>

                    <Tooltip
                        icon={FaCompass}
                        title="Default Bold Variant"
                        subtitle="This is a pink colored tooltip that auto-closes."
                        col="pink"
                        close={true}>
                        <Badge>
                            Pink
                        </Badge>
                    </Tooltip>

                    <Tooltip
                        icon={FaDatabase}
                        title="Default Bold Variant"
                        subtitle="This is a green colored tooltip that auto-closes."
                        col="green"
                        close={true}>
                        <Badge>
                            Green
                        </Badge>
                    </Tooltip>
                </div>

                <span className="heading sm">Light</span>
                <div className="flex row">
                    <Tooltip
                        icon={FaDiceD6}
                        title="Light Variant"
                        subtitle="This is a default colored tooltip that auto-closes."
                        variant="light"
                        close={true}>
                        <Badge>
                            Default
                        </Badge>
                    </Tooltip>

                    <Tooltip
                        icon={FaGithub}
                        title="Light Variant"
                        subtitle="This is a blue colored tooltip that auto-closes."
                        variant="light"
                        col="blue"
                        close={true}>
                        <Badge>
                            Blue
                        </Badge>
                    </Tooltip>

                    <Tooltip
                        icon={FaGoogleDrive}
                        title="Light Variant"
                        subtitle="This is a pink colored tooltip that auto-closes."
                        variant="light"
                        col="pink"
                        close={true}>
                        <Badge>
                            Pink
                        </Badge>
                    </Tooltip>

                    <Tooltip
                        icon={FaGrinStars }
                        title="Light Variant"
                        subtitle="This is a green colored tooltip that auto-closes."
                        variant="light"
                        col="green"
                        close={true}>
                        <Badge>
                            Green
                        </Badge>
                    </Tooltip>
                </div>

                <span className="heading sm">Auto vs Manual Closing</span>
                <div className="flex row">
                    <Tooltip
                        icon={FaUserSecret }
                        title="Default Bold Variant"
                        subtitle="This is a tooltip that auto-closes."
                        col="pink"
                        close={true}>
                        <Badge>
                            Auto Close
                        </Badge>
                    </Tooltip>

                    <Tooltip
                        icon={FaWallet }
                        title="Light Variant"
                        subtitle="This is a tooltip that does not auto-close."
                        col="pink"
                        variant="light"
                        close={false}>
                        <Badge>
                            Manual Close
                        </Badge>
                    </Tooltip>
                </div>
            </div>
        </>
    )
}