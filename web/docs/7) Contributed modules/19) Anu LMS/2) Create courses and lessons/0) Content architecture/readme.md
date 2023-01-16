Anu LMS content architecture is powered by common Drupal entities such as nodes, taxonomy terms, and paragraphs.

When building courses in Anu LMS, content creators work with the following content types and data structures:

### Course

The main purpose of the course is to organize learning materials into granular learning steps. It's achieved by breaking down course content into modules and lessons. This process is similar to building a table of contents for your course. Read on to learn more about modules and lessons.

**Entity type:** Node of type Course

### Courses page

The courses page displays multiple courses grouped by **course category** (taxonomy). It's useful for building learning paths that include multiple courses.

**Entity type:** Node of type Courses page

### Module

Modules organize multiple lessons and quizzes into groups within one course. Users can expand and collapse module contents in the course navigation. Modules are added and edited on the course edit page.

**Entity type:** Paragraph

### Lesson

The lesson is a self-contained piece of learning content that consists of one or more Pages. Lesson titles are visible in the course navigation. When the linear progress feature is disabled on the course level, users can freely navigate between lessons using the course navigation. Lessons are added to Modules. Lesson content is added and edited on the lesson edit page.

**Entity type:** Node of type Lesson

### Quiz

Quizzes sit on the same level of content hierarchy as lessons and behave very similar to them. Quizzes can be added to the end of the modules. To enable quizzes, install **Anu LMS Quizzes** module.

**Entity type:** Node of type Quiz

### Page

The lesson's content is broken down into pages. When users navigate the lesson, they can see one page at a time. Pages are added and edited on the lesson edit page.

**Entity type:** Paragraph

### Block

Pages are broken down into blocks. Block (not to be confused with Drupal layout blocks) is the smallest piece of content in Anu LMS. Common blocks are Heading, Text, List, Image, Audio, Embed video and many others. Blocks are added and edited on the lesson edit page.

**Entity type:** Paragraph