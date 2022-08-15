import { styled } from "@mui/material/styles";
import { BsChevronRight } from "react-icons/bs";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

export const units = [
  {
    title: "Вступ до C#",
    _id: "u1",
    lessons: [
      {
        title: "Класи та об'єкти",
        _id: "l1",
      },
      {
        title: "Конструкції",
        _id: "l2",
      },
      {
        title: "Перевантаження методу",
        _id: "l3",
      },
      {
        title: "Поля Const і Readonly",
        _id: "l4",
      },
      {
        title: "Додавання класів та основного методу",
        _id: "l5",
      },
      {
        title: "Структура",
        _id: "l6",
      },
      {
        title: "Типи значень і довідкові типи",
        _id: "l7",
      },
      {
        title: "Клас проти структури",
        _id: "l8",
      },
      {
        title: "Область застосування (контекст) змінної",
        _id: "l9",
      },
      {
        title: "Простіри імен",
        _id: "l10",
      },
      {
        title: "Глобальні простори імен",
        _id: "l11",
      },
      {
        title: "Додавання збірки до проекту",
        _id: "l12",
      },
      {
        title: "Модифікатори доступу",
        _id: "l13",
      },
      {
        title: "Властивості",
        _id: "l14",
      },
      {
        title: "Індекси",
        _id: "l15",
      },
      {
        title: "Статичне ключове слово",
        _id: "l16",
      },
    ],
  },
  {
    title: "Основи C#",
    _id: "u2",
    lessons: [
      {
        title: "Класи та об'єкти",
        _id: "l1",
      },
      {
        title: "Конструкції",
        _id: "l2",
      },
      {
        title: "Перевантаження методу",
        _id: "l3",
      },
      {
        title: "Поля Const і Readonly",
        _id: "l4",
      },
      {
        title: "Додавання класів та основного методу",
        _id: "l5",
      },
      {
        title: "Структура",
        _id: "l6",
      },
      {
        title: "Типи значень і довідкові типи",
        _id: "l7",
      },
      {
        title: "Клас проти структури",
        _id: "l8",
      },
      {
        title: "Область застосування (контекст) змінної",
        _id: "l9",
      },
      {
        title: "Простіри імен",
        _id: "l10",
      },
      {
        title: "Глобальні простори імен",
        _id: "l11",
      },
      {
        title: "Додавання збірки до проекту",
        _id: "l12",
      },
      {
        title: "Модифікатори доступу",
        _id: "l13",
      },
      {
        title: "Властивості",
        _id: "l14",
      },
      {
        title: "Індекси",
        _id: "l15",
      },
      {
        title: "Статичне ключове слово",
        _id: "l16",
      },
    ],
  },
  {
    title: "Класи, структури та об'єкти",
    _id: "u3",
    lessons: [
      {
        title: "Класи та об'єкти",
        _id: "l1",
      },
      {
        title: "Конструкції",
        _id: "l2",
      },
      {
        title: "Перевантаження методу",
        _id: "l3",
      },
      {
        title: "Поля Const і Readonly",
        _id: "l4",
      },
      {
        title: "Додавання класів та основного методу",
        _id: "l5",
      },
      {
        title: "Структура",
        _id: "l6",
      },
      {
        title: "Типи значень і довідкові типи",
        _id: "l7",
      },
      {
        title: "Клас проти структури",
        _id: "l8",
      },
      {
        title: "Область застосування (контекст) змінної",
        _id: "l9",
      },
      {
        title: "Простіри імен",
        _id: "l10",
      },
      {
        title: "Глобальні простори імен",
        _id: "l11",
      },
      {
        title: "Додавання збірки до проекту",
        _id: "l12",
      },
      {
        title: "Модифікатори доступу",
        _id: "l13",
      },
      {
        title: "Властивості",
        _id: "l14",
      },
      {
        title: "Індекси",
        _id: "l15",
      },
      {
        title: "Статичне ключове слово",
        _id: "l16",
      },
    ],
  },
  {
    title: "Спадковість і поліморфізм",
    _id: "u4",
    lessons: [
      {
        title: "Класи та об'єкти",
        _id: "l1",
      },
      {
        title: "Конструкції",
        _id: "l2",
      },
      {
        title: "Перевантаження методу",
        _id: "l3",
      },
      {
        title: "Поля Const і Readonly",
        _id: "l4",
      },
      {
        title: "Додавання класів та основного методу",
        _id: "l5",
      },
      {
        title: "Структура",
        _id: "l6",
      },
      {
        title: "Типи значень і довідкові типи",
        _id: "l7",
      },
      {
        title: "Клас проти структури",
        _id: "l8",
      },
      {
        title: "Область застосування (контекст) змінної",
        _id: "l9",
      },
      {
        title: "Простіри імен",
        _id: "l10",
      },
      {
        title: "Глобальні простори імен",
        _id: "l11",
      },
      {
        title: "Додавання збірки до проекту",
        _id: "l12",
      },
      {
        title: "Модифікатори доступу",
        _id: "l13",
      },
      {
        title: "Властивості",
        _id: "l14",
      },
      {
        title: "Індекси",
        _id: "l15",
      },
      {
        title: "Статичне ключове слово",
        _id: "l16",
      },
    ],
  },
  {
    title: "Обробка винятків",
    _id: "u5",
    lessons: [
      {
        title: "Класи та об'єкти",
        _id: "l1",
      },
      {
        title: "Конструкції",
        _id: "l2",
      },
      {
        title: "Перевантаження методу",
        _id: "l3",
      },
      {
        title: "Поля Const і Readonly",
        _id: "l4",
      },
      {
        title: "Додавання класів та основного методу",
        _id: "l5",
      },
      {
        title: "Структура",
        _id: "l6",
      },
      {
        title: "Типи значень і довідкові типи",
        _id: "l7",
      },
      {
        title: "Клас проти структури",
        _id: "l8",
      },
      {
        title: "Область застосування (контекст) змінної",
        _id: "l9",
      },
      {
        title: "Простіри імен",
        _id: "l10",
      },
      {
        title: "Глобальні простори імен",
        _id: "l11",
      },
      {
        title: "Додавання збірки до проекту",
        _id: "l12",
      },
      {
        title: "Модифікатори доступу",
        _id: "l13",
      },
      {
        title: "Властивості",
        _id: "l14",
      },
      {
        title: "Індекси",
        _id: "l15",
      },
      {
        title: "Статичне ключове слово",
        _id: "l16",
      },
    ],
  },
  {
    title: "Інтерфейси",
    _id: "u6",
    lessons: [
      {
        title: "Класи та об'єкти",
        _id: "l1",
      },
      {
        title: "Конструкції",
        _id: "l2",
      },
      {
        title: "Перевантаження методу",
        _id: "l3",
      },
      {
        title: "Поля Const і Readonly",
        _id: "l4",
      },
      {
        title: "Додавання класів та основного методу",
        _id: "l5",
      },
      {
        title: "Структура",
        _id: "l6",
      },
      {
        title: "Типи значень і довідкові типи",
        _id: "l7",
      },
      {
        title: "Клас проти структури",
        _id: "l8",
      },
      {
        title: "Область застосування (контекст) змінної",
        _id: "l9",
      },
      {
        title: "Простіри імен",
        _id: "l10",
      },
      {
        title: "Глобальні простори імен",
        _id: "l11",
      },
      {
        title: "Додавання збірки до проекту",
        _id: "l12",
      },
      {
        title: "Модифікатори доступу",
        _id: "l13",
      },
      {
        title: "Властивості",
        _id: "l14",
      },
      {
        title: "Індекси",
        _id: "l15",
      },
      {
        title: "Статичне ключове слово",
        _id: "l16",
      },
    ],
  },
];

export const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&": {
    width: "100%",
  },
  background: "#FFFFFF",
  "& .MuiButtonBase-root.Mui-expended": {
    background: "#E36F59",
  },
  "&:before": {
    display: "none",
  },
  overflow: "hidden",
  "& .MuiAccordionSummary-root": {
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  },
  "&:first-of-type .MuiAccordionSummary-root:first-of-type": {
    borderTop: "none",
  },
  "&  .MuiTypography-root": {
    lineHeight: "18px",
    color: "#23262D",
    fontWeight: 600,
    fontSize: "16px",
    "& .menu__num": {
      fontWeight: 600,
      color: "#E36F59",
      marginRight: 8,
    },
  },
  "& .MuiAccordionSummary-root.Mui-expanded": {
    background: "#E36F59",
    "& .MuiTypography-root": {
      color: "#fff",
      "&::before": {
        color: "#fff",
      },
    },
  },
  "& .MuiAccordionDetails-root": {
    padding: 0,
  },
}));

export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<BsChevronRight />} {...props} />
))(({ theme }) => ({
  backgroundColor: "#fff",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper": {
    display: "none",
  },
  "& .MuiAccordionSummary-content": {
    margin: "20px 0 23px 0",
  },
}));

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  border: "80%",
}));
