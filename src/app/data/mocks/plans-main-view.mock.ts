import { PlanSection } from "../interfaces/plan-main-view.model";

export const MOCK_PLAN_SECTIONS: PlanSection[] = [
    {
        image: {
            src: "../../../../assets/img/squat.png",
            alt: "Image description for Plan 1",
        },
        text: {
            title: "Maximize Your Squat Power",
            content: "Elevate your squat game with targeted strength and mobility exercises for powerful lower body gains."
        },
        button: {
            icon: 'shopping_cart',
            text: 'Get plan'
        },
        description: "This plan is designed to enhance your squat performance. Focusing on building strength and stability in your lower body, it integrates a variety of squat variations and supportive exercises. Expect to work on core stability, hip mobility, and overall leg strength, ensuring a balanced approach to achieving a powerful squat. Ideal for those looking to increase their squat max or seeking a solid foundation for overall fitness."
    },
    {
        image: {
            src: "../../../../assets/img/benchpress.png",
            alt: "Image description for Plan 2"
        },
        text: {
            title: "Bench Press Improvement Plan",
            content: "Boost your upper body strength with focused techniques to enhance your bench press performance."
        },
        button: {
            icon: 'shopping_cart',
            text: 'Get plan'
        }
        , description: "Targeted at improving your bench press, this plan combines techniques and exercises to increase upper body strength, particularly in the chest, shoulders, and triceps. Emphasizing proper form and progressive overload, it includes accessory work to support joint health and muscle balance. Whether you're aiming for a personal best or just starting out, this plan is your guide to a stronger, more efficient bench press."
    },
    {
        image: {
            src: "../../../../assets/img/deadlift.png",
            alt: "Image description for Plan 3"
        },
        text: {
            title: "Deadlift Enhancement Plan",
            content: "Master the deadlift with a comprehensive approach to increasing strength and improving technique."
        },
        button: {
            icon: 'shopping_cart',
            text: 'Get plan'
        },
        description: "This comprehensive program is dedicated to advancing your deadlift. It covers everything from fundamental form and technique to advanced lifting strategies. Focused on building a strong back, glutes, and hamstrings, the plan also addresses grip strength and postural alignment. Suitable for lifters of all levels, it's a step-by-step guide to lifting more weight safely and effectively in the deadlift."
    },
    {
        image: {
            src: "../../../../assets/img/run.png",
            alt: "Image description for Plan 3"
        },
        text: {
            title: "Dynamic Athlete Conditioning",
            content: "Transform into a versatile athlete with a regimen focusing on agility, speed, and functional fitness."
        },
        button: {
            icon: 'shopping_cart',
            text: 'Get plan'
        },
        description: "Designed for those who aspire to be well-rounded, dynamic athletes, this plan focuses on agility, speed, and overall athletic performance. It incorporates a mix of plyometrics, cardio, and functional strength training. You'll work on quickness, explosive power, and endurance, making this plan ideal for sports enthusiasts or anyone looking to improve their physical capabilities across a wide range of activities."
    }
];
