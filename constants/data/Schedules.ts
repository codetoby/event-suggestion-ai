interface ScheduleEvent {
    title: string;
    description: string;
    location: string;
    start: string;
    end: string;
    duration: number;
    time: string;
}

interface Schedule {
    [key: string]: ScheduleEvent[];
}

export const SCHEDULE: Schedule = {
    '2024-09-01': [
        {
            title: 'Morning Yoga',
            description: 'A relaxing morning yoga session',
            location: 'Park',
            start: '2024-09-01T07:00:00',
            end: '2024-09-01T08:00:00',
            duration: 60,
            time: '7:00 AM - 8:00 AM',
        },
    ],
    '2024-09-02': [
        {
            title: 'Team Stand-up Meeting',
            description: 'Daily sync-up with the project team',
            location: 'Zoom',
            start: '2024-09-02T09:00:00',
            end: '2024-09-02T09:30:00',
            duration: 30,
            time: '9:00 AM - 9:30 AM',
        },
        {
            title: 'Client Presentation',
            description: 'Presenting Q3 results to the client',
            location: 'Office Boardroom',
            start: '2024-09-02T11:00:00',
            end: '2024-09-02T12:30:00',
            duration: 90,
            time: '11:00 AM - 12:30 PM',
        },
    ],
    '2024-09-03': [
        {
            title: 'Doctor’s Appointment',
            description: 'Annual health check-up',
            location: 'Downtown Clinic',
            start: '2024-09-03T14:00:00',
            end: '2024-09-03T15:00:00',
            duration: 60,
            time: '2:00 PM - 3:00 PM',
        },
        {
            title: 'Dinner with Friends',
            description: 'Dinner at the new Italian restaurant',
            location: 'Luigi’s Italian Restaurant',
            start: '2024-09-03T19:00:00',
            end: '2024-09-03T21:00:00',
            duration: 120,
            time: '7:00 PM - 9:00 PM',
        },
    ],
    '2024-09-04': [
        {
            title: 'Gym Workout',
            description: 'Strength training session',
            location: 'Fitness Center',
            start: '2024-09-04T06:30:00',
            end: '2024-09-04T07:30:00',
            duration: 60,
            time: '6:30 AM - 7:30 AM',
        },
    ],
    '2024-09-05': [
        {
            title: 'Project Kickoff',
            description: 'Kickoff meeting for new project',
            location: 'Conference Room A',
            start: '2024-09-05T10:00:00',
            end: '2024-09-05T12:00:00',
            duration: 120,
            time: '10:00 AM - 12:00 PM',
        },
        {
            title: 'Lunch with Sarah',
            description: 'Catching up with Sarah',
            location: 'Central Cafe',
            start: '2024-09-05T13:00:00',
            end: '2024-09-05T14:00:00',
            duration: 60,
            time: '1:00 PM - 2:00 PM',
        },
    ],
    '2024-09-07': [
        {
            title: 'Grocery Shopping',
            description: 'Weekly grocery run',
            location: 'Supermarket',
            start: '2024-09-07T10:00:00',
            end: '2024-09-07T11:00:00',
            duration: 60,
            time: '10:00 AM - 11:00 AM',
        },
    ],
    '2024-09-08': [
        {
            title: 'Football Game',
            description: 'Playing football with friends',
            location: 'Community Field',
            start: '2024-09-08T16:00:00',
            end: '2024-09-08T18:00:00',
            duration: 120,
            time: '4:00 PM - 6:00 PM',
        },
    ],
    '2024-09-09': [
        {
            title: 'Marketing Strategy Meeting',
            description: 'Discussing Q4 marketing strategies',
            location: 'Office Conference Room',
            start: '2024-09-09T11:00:00',
            end: '2024-09-09T12:00:00',
            duration: 60,
            time: '11:00 AM - 12:00 PM',
        },
    ],
    '2024-09-10': [
        {
            title: 'Birthday Celebration',
            description: 'John’s Birthday Party',
            location: 'John’s House',
            start: '2024-09-10T19:00:00',
            end: '2024-09-10T23:00:00',
            duration: 240,
            time: '7:00 PM - 11:00 PM',
        },
    ],
    '2024-09-12': [
        {
            title: 'Client Feedback Session',
            description: 'Collecting feedback from clients on recent project',
            location: 'Zoom',
            start: '2024-09-12T14:00:00',
            end: '2024-09-12T15:00:00',
            duration: 60,
            time: '2:00 PM - 3:00 PM',
        },
    ],
    '2024-09-14': [
        {
            title: 'Hiking Trip',
            description: 'Outdoor hike with friends',
            location: 'Mountain Trail',
            start: '2024-09-14T08:00:00',
            end: '2024-09-14T12:00:00',
            duration: 240,
            time: '8:00 AM - 12:00 PM',
        },
    ],
    '2024-09-15': [
        {
            title: 'Doctor’s Appointment',
            description: 'Follow-up with the specialist',
            location: 'City Hospital',
            start: '2024-09-15T10:00:00',
            end: '2024-09-15T11:00:00',
            duration: 60,
            time: '10:00 AM - 11:00 AM',
        },
    ],
    '2024-09-17': [
        {
            title: 'Networking Event',
            description: 'Networking with professionals in the industry',
            location: 'Grand Hotel Ballroom',
            start: '2024-09-17T18:00:00',
            end: '2024-09-17T20:00:00',
            duration: 120,
            time: '6:00 PM - 8:00 PM',
        },
    ],
    '2024-09-19': [
        {
            title: 'Team Lunch',
            description: 'Lunch with the whole project team',
            location: 'Office Cafeteria',
            start: '2024-09-19T12:00:00',
            end: '2024-09-19T13:00:00',
            duration: 60,
            time: '12:00 PM - 1:00 PM',
        },
    ],
    '2024-09-22': [
        {
            title: 'Workshop on AI',
            description: 'AI & Machine Learning Workshop',
            location: 'Tech Conference Hall',
            start: '2024-09-22T09:00:00',
            end: '2024-09-22T16:00:00',
            duration: 420,
            time: '9:00 AM - 4:00 PM',
        },
    ],
};