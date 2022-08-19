// Basic user information to be displayed in the header of the page
const UserInfo = {
    firstName: "Sohaib",
    lastName: "Ahmed",
    weight: 164,
    height: `6'0"`
};

// Full workout routine consisting of each workout
const Routine = [
    {
        day: "Push",
        workout: [
            {
                id: 1,
                name: "DB Bench Press",
                sets: 3,
                reps: "6 - 8",
            },
            {
                id: 2,
                name: "Barbell Military Press",
                sets: 3,
                reps: "8 - 10",
            },
            {
                id: 3,
                name: "Bodyweight Tricep Dips",
                sets: 3,
                reps: 10,
            },
            {
                id: 4,
                name: "Incline DB Chest Press",
                sets: 3,
                reps: "6 - 8",
            },
            {
                id: 5,
                name: "DB Lateral Raises",
                sets: 3,
                reps: 12,
                superset: true
            },
            {
                id: 6,
                name: "DB Rear Delt Raises",
                sets: 3,
                reps: 12,
                superset: true
            },
            {
                id: 7,
                name: "Cable Tricep Pulldown",
                sets: 3,
                reps: "6 - 8"
            },
            {
                id: 8,
                name: "Cable Chest Fly",
                sets: 3,
                reps: 12
            }
        ]
    },
    {
        day: "Pull",
        workout: [
            {
                id: 1,
                name: "Barbell Rows",
                sets: 3,
                reps: "6 - 8",
                superset: true
            },
            {
                id: 2,
                name: "Pull Ups",
                sets: 3,
                reps: "3 - 6",
                superset: true
            },
            {
                id: 3,
                name: "Barbell Bicep 21's",
                sets: 3,
                reps: 21
            },
            {
                id: 4,
                name: "Low Row Machine",
                sets: 3,
                reps: "6 - 8"
            },
            {
                id: 5,
                name: "Lat Pulldown",
                sets: 3,
                reps: "6 - 8",
                superset: true
            },
            {
                id: 6,
                name: "Close Grip Pulldown",
                sets: 3,
                reps: "6 - 8",
                superset: true
            },
            {
                id: 7,
                name: "DB Alternating Curls",
                sets: 3,
                reps: 12
            },
            {
                id: 8,
                name: "Cable Upper Back Pull",
                sets: 3,
                reps: "6 - 8",
            }
        ]
    },
    {
        day: "Legs",
        workout: [
            {
                id: 1,
                name: "Barbell Back Squat",
                sets: 3,
                reps: "6 - 8"
            },
            {
                id: 2,
                name: "Hamstring Curl Machine",
                sets: 3,
                reps: "10 - 12"
            },
            {
                id: 3,
                name: "Standing Calf Raises",
                sets: 3,
                reps: 30
            },
            {
                id: 4,
                name: "Leg Extensions",
                sets: 3,
                reps: "10 - 12"
            },
            {
                id: 5,
                name: "DB Split Squats",
                sets: 3,
                reps: "6 - 8"
            },
            {
                id: 6,
                name: "Hack Squats",
                sets: 3,
                reps: "10 - 12"
            }
        ]
    },
    {
        day: "Abs 1",
        workout: [
            {
                id: 1,
                name: "Standard Cruches",
                sets: 3,
                time: 30,
                superset: true
            },
            {
                id: 2,
                name: "Reverse Crunches",
                sets: 3,
                time: 30,
                superset: true
            },
            {
                id: 3,
                name: "DB Plank Pull Through",
                sets: 3,
                time: 30,
                superset: true
            },
        ]
    },
    {
        day: "Abs 2",
        workout: [
            {
                id: 1,
                name: "V-Ups",
                sets: 3,
                time: 30,
                superset: true
            },
            {
                id: 2,
                name: "Plank Knee to Elbow",
                sets: 3,
                time: 30,
                superset: true
            },
            {
                id: 3,
                name: "Leg Raise & Twist",
                sets: 3,
                time: 30,
                superset: true
            },
        ]
    }
]

export const Data = {
    UserInfo,
    Routine
};