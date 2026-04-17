import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-[#FF4D00] border-[#FF4D00]">⚔️ Битва начинается</Badge>,
    title: "Роботы. Бой. Победа.",
    heroImage: "https://cdn.poehali.dev/projects/d7875eaa-4d62-48a8-810e-a623ab217b11/files/474cffcb-1acf-4105-b1fb-d7df4c34273a.jpg",
    showButton: true,
    buttonText: 'Выбрать робота'
  },
  {
    id: 'about',
    title: 'Почему наши роботы?',
    content: 'Каждый робот создан для настоящих сражений — прочный корпус, мощные манипуляторы и точное управление. Собери армию и веди её к победе.'
  },
  {
    id: 'features',
    title: 'Арсенал бойца',
    content: 'Более 20 моделей боевых роботов: от лёгких скаутов до тяжёлых разрушителей. Каждый с уникальными способностями и возможностью апгрейда.'
  },
  {
    id: 'testimonials',
    title: 'Чемпионы арены',
    content: 'Тысячи битв сыграно. Дети и взрослые по всей стране строят свои армии и сражаются за звание лучшего командира роботов.'
  },
  {
    id: 'join',
    title: 'Вступи в битву',
    content: 'Готов к первому сражению? Выбери своего робота, собери команду и докажи, кто настоящий мастер арены.',
    showButton: true,
    buttonText: 'Купить робота'
  },
]