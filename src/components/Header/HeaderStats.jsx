import { FileText, Flame, Crown } from "lucide-react";
import "../../styles/HeaderStats.css";

export default function HeaderStats({
  totalScripts = 2,
  avgScore = 71,
  plan = "Free",
}) {
  return (

   
<div className="dashboard-header-stats-card">

    <div className="dashboard-stat-card">

        <div className="dashboard-stat-icon">
            <FileText size={18}/>
        </div>

        <div className="dashboard-stat-content">

            <h3>2</h3>

            <span>Total Scripts</span>

        </div>

    </div>

    <div className="dashboard-stat-card">

        <div className="dashboard-stat-icon dashboard-stat-flame">
            <Flame size={18}/>
        </div>

        <div className="dashboard-stat-content">

            <h3>71</h3>

            <span>Avg Viral Score</span>

        </div>

    </div>

    <div className="dashboard-stat-card">

        <div className="dashboard-stat-icon dashboard-stat-crown">
            <Crown size={18}/>
        </div>

        <div className="dashboard-stat-content">

            <h3>Free</h3>

            <span>Current Plan</span>

        </div>

    </div>

</div>
    






  );
}