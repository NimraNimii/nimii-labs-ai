import "../../styles/AIInsights.css";
import {
    CheckCircle,
    AlertTriangle,
    Zap
} from "lucide-react";

export default function AIInsights({ analysis }) {

    if (!analysis?.insights) return null;

    const {
        biggestStrength,
        biggestWeakness,
        quickestWin
    } = analysis.insights;

    return (
        <section className="ai-insights">

            <div className="ai-insights-header">
                <h2>AI Insights</h2>

                <p>
                    Here's what the AI discovered after analyzing your content.
                </p>
            </div>

            <div className="ai-insights-grid">

                <div className="insight-card success">

                    <div className="insight-title">
                        <CheckCircle size={22}/>
                        <span>Biggest Strength</span>
                    </div>

                    <h3>{biggestStrength.title}</h3>

                    <p>{biggestStrength.description}</p>

                </div>

                <div className="insight-card warning">

                    <div className="insight-title">
                        <AlertTriangle size={22}/>
                        <span>Biggest Weakness</span>
                    </div>

                    <h3>{biggestWeakness.title}</h3>

                    <p>{biggestWeakness.description}</p>

                </div>

                <div className="insight-card primary">

                    <div className="insight-title">
                        <Zap size={22}/>
                        <span>Fastest Win</span>
                    </div>

                    <h3>{quickestWin.title}</h3>

                    <p>{quickestWin.description}</p>

                </div>

            </div>

        </section>
    );
}