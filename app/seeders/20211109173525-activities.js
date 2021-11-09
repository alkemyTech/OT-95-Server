'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Activities',
      [
        {
          name: 'Apoyo Escola para el nivel Primario',
          content:
            'El espacio de apoyo escolar es el corazón del área educativa. Se realizan los talleres de lunes a jueves de 10 a 12 horas y de 14 a 16 horas en el contraturno, Los sábados también se realiza el taller para niños y niñas que asisten a la escuela doble turno. Tenemos un espacio especial para los de 1er grado 2 veces por semana ya que ellos necesitan atención especial! Actualmente se encuentran inscriptos a este programa 150 niños y niñas de 6 a 15 años. Este taller está pensado para ayudar a los alumnos con el material que traen de la escuela, también tenemos una docente que les da clases de lengua y matemática con una planificación propia que armamos en Manos para nivelar a los niños y que vayan con más herramientas a la escuela.',
          image: 'https://lh4.googleusercontent.com/8tu8XjN3qfRMy1jKQ1QwA1i388AEEXgyYi7F96yYx8uz6BbZJNADdm5o_8xNV9fMSldk_G7uipLa4Or3jgkE=w1366-h624-rw',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Apoyo Escolar Nivel Secundaria',
          content:
            'Del mismo modo que en primaria, este taller es el corazón del área secundaria. Se realizan talleres de lunes a viernes de 10 a 12 horas y de 16 a 18 horas en el contraturno. Actualmente se encuentran inscriptos en el taller 50 adolescentes entre 13 y 20 años. Aquí los jóvenes se presentan con el material que traen del colegio y una docente de la institución y un grupo de voluntarios los recibe para ayudarlos a estudiar o hacer la tarea. Este espacio también es utilizado por los jóvenes como un punto de encuentro y relación entre ellos y la institución.',
          image: 'https://lh3.googleusercontent.com/fife/AAWUweWp5AZtE36aRvI8UmJojntA_pBUJ1ylKoPVmGM8jqBUDC5h5BgXxJNAlx9l0UMMmg4saBf-wqRTHHVBD2_Hf1UNukEvwdG55x1zrv4P6Az_jxCLD8CCZy5oUKhqH4d2672oSZgd2dfa1aocMVravVXBGswSCyiwflFwQxuGAn9kJK77wJIZUmznufL0XqlK3s3Ij-7WC7gxSINXTz0uvyyI6ZtH8ythw46BNvIyNlDfJmChas_2ndHrg-N7DoT8v4AT0M4nfj2Ow-DIsyCQk233Fh1nb_fRWcFbvNXPXntek-goJ_HiiBAi1cOfKgMoXg2h2vveLCS09DaHBDqB6XUKNtFLVTndFOnLqBjxGBMaWPbiEdAUljaPhauzWHhY_GHdVl3tirVfAjlTMScJKgKw8LKletl4vWOEy-2YnLWI9CHJE_dCoGHxhTaZnk8Gasfgvoi_8CLCptyYaWqW60beEej5C-i0fFEw6iga0SnAXBt323CW-AlJ3J9HtCEIsYNOgWzh_RXrFE6UEkcpxVhLGhZf7N-7ckd0fuFcHiuOBo2Gmdh_r3HcZD5cQBB2676x9TJOuJpXw_UKI4BryvXwNnVTTGGNYguFPEVAvTTgBsDR4LM1oSfIAu1L4AvZOI_B7knIneABIDL7U42rYdpT5w2t9UmM95MTU8Htpdjy763SIKvjyiZjlWid8YhnRu25aKkTpgjCbLY2SLuWhopD7sYZwKcn_gI=w1366-h624-ft',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Tutorias',
          content:
            'Es un programa destinado a jóvenes a partir del tercer año de secundaria, cuyo objetivo es garantizar su permanencia en la escuela y construir un proyecto de vida que da sentido al colegio. El objetivo de esta propuesta es lograr la integración escolar de niños y jóvenes del barrio promoviendo el soporte socioeducativo y emocional apropiado, desarrollando los recursos institucionales necesarios a través de la articulación de nuestras intervenciones con las escuelas que los alojan, con las familias de los alumnos y con las instancias municipales, provinciales y nacionales que correspondan. El programa contempla: Encuentro semanal con tutores (Individuales y grupales) Actividad proyecto (los participantes del programa deben pensar una actividad relacionada a lo que quieren hacer una vez terminada la escuela y su tutor los New Caso 1: ONG - Somos Más. 5 acompaña en el proceso) Ayudantías (los que comienzan el 2do años del programa deben elegir una de las actividades que se realizan en la institución para acompañarla e ir conociendo como es el mundo laboral que les espera). Acompañamiento escolar y familiar (Los tutores son encargados de articular con la familia y con las escuelas de los jóvenes para monitorear el estado de los tutoreados) Beca estímulo (los jóvenes reciben una beca estímulo que es supervisada por los tutores). Actualmente se encuentran inscriptos en el programa 30 adolescentes. Taller Arte y Cuentos: Taller literario y de manualidades que se realiza semanalmente. Paseos recreativos y educativos: Estos paseos están pensados para promover la participación y sentido de pertenencia de los niños, niñas y adolescentes al área educativa.',
          image: 'https://lh3.googleusercontent.com/fife/AAWUweUA3k7cjvX4xQK2d49NC8OaRbRiBvE0lDJ9RnABzsuaYeoh2Ud4xtPU7nkMhehg5p_d4ZVcyiNijAyhRjymSvcqKj1kLXU3FUIkWb_SwaRFejUyaDwP27dbNxK4GBIZLoyG-ETPKATLlshZxVbTcu5lkPf6tiiTktrA3yVlErzWjjKozMuEDz7g5MKdsKJhlM3Y_HsfFxVAI61OOFgN0K9bHA2MyEwYEBdqGKg4Lvz8eZ1D4PmWCyjN_FnQHQc6WXH3Qk_8VhB_EBrrhQTLlgazY4UnK65OEaAVqoWOSB-qrrsjIuQ2LM1LdLqrdaTOHV4c3LYOZbwYgVzJU-m1LPclV6uaOcsnJf0h1vlDKpDJ5bMGr_iUwOzTLm2_mFz-MOI6FscqHJW_UcljxQ2YaYFcdPxyNYeUkKiivzdirPjBNVyoQWRNGqs1p5FfHcCFI4YJvDta5yKEMUTn81aPk7L2VCkgoufHMzXRcGmUSMJZmQI49EwqixgaP9MGbCcK85R_DdGNpFaKkCz_T06_8Jmh919TsgzDP4RPZS0NN1nohz06byaD0qL6_askD6euZePR94m6uJdpX6ZxUKTRUjKROMqBCjjzdmr5h1JpctdocFYvy1IxZjX5W1U0L8-y2ah1WKp55PTr51urf_abE8aC_DzpHlm2axKW1ynxMV8M8g04y-X1_jcwA49_niP4tsWA91kEq5rz9idUj-20_5CeoGoKWTCMMLI=w1366-h624-ft',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {},
};
