import { Button } from "antd";
import "../../../../styles/SectionTitle.css";

export default function SectionTitle({ title, subTitle, showDrawer }: { title: string, subTitle: string, showDrawer:()=>void }) {
    
    return (
        <div className="title-page-section">
            <div className="title-section">
                <div className="title-item">{title}</div>
                <div className="subtitle-item">{subTitle}</div>
            </div>

            <div>
                <Button type="primary" size="middle" onClick={showDrawer}>
                    Create new
                </Button>
            </div>
        </div>
    );
}