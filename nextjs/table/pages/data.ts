export const columns = [
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'company',
    label: 'Company',
  },
  {
    key: 'status',
    label: 'Status',
  },
  {
    key: 'actions',
    label: 'Actions',
  },
];

export type Attendee = {
  key: number;
  name: string;
  company: string;
  title: string;
  location: string;
  status: string;
  avatarUrl: string;
}

export const initialAttendees: Attendee[] = [
  {
    key: 1,
    name: 'Dave',
    title: 'Technician',
    company: 'Acme',
    location: 'Chicago',
    status: 'unpaid',
    avatarUrl: 'https://randomuser.me/api/portraits/men/34.jpg',
  },
  {
    key: 2,
    name: 'Dale',
    title: 'Recruiter',
    company: 'Acme',
    location: 'Austin',
    status: 'active',
    avatarUrl: 'https://randomuser.me/api/portraits/men/79.jpg',
  },
  {
    key: 3,
    name: 'Christina',
    title: 'Accountant',
    company: 'A1 Financials',
    location: 'Los Angeles',
    status: 'speaker',
    avatarUrl: 'https://randomuser.me/api/portraits/women/27.jpg',
  },
  {
    key: 4,
    name: 'Aston',
    company: '4 Note Software',
    title: 'Software Engineer',
    location: 'Los Angeles',
    status: 'volunteer',
    avatarUrl: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
];
