import { Component, HostListener, signal, AfterViewInit, inject, computed } from '@angular/core';
import Project, { ProjectTranslations } from '../../models/Project';
import { IconComponent } from '../icon-component/icon-component';
import { HighlightModule } from 'ngx-highlightjs';
import { LanguageService, Lang } from '../../services/language.service';
import { UI } from '../../ui.translations';

@Component({
  selector: 'app-projects-section-component',
  imports: [IconComponent, HighlightModule],
  templateUrl: './projects-section-component.html',
  styleUrl: './projects-section-component.css',
})
export class ProjectsSectionComponent implements AfterViewInit {
  private languageService = inject(LanguageService);

  lang = this.languageService.lang;

  // UI strings (nav, headings, labels)
  t = computed(() => UI[this.lang()]);

  setLang(lang: Lang): void {
    this.languageService.setLang(lang);
  }

  langBtnClass(btn: Lang): string {
    const base =
      'px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer border-none';
    return this.lang() === btn
      ? `${base} bg-white border border-slate-200 text-slate-900 shadow-sm`
      : `${base} bg-transparent text-slate-400 hover:text-slate-600`;
  }

  // Project content — just pick the right language from the nested object
  tr(project: Project): ProjectTranslations {
    return project.translations[this.lang()];
  }

  projects: Project[] = [
    {
      id: 'sullivan',
      translations: {
        es: {
          title: 'SullivanMór Real Estate',
          intro: 'Plataforma inmobiliaria con filtros avanzados y gestión de propiedades',
          story: [
            '<strong>SullivanMór</strong> surgió como una solución estratégica para establecer un canal de ventas digital exclusivo. La iniciativa buscaba profesionalizar la exhibición de inmuebles, migrando de una dependencia de plataformas de terceros hacia un ecosistema propio con control total sobre la información.',
            'Comenzó como una landing page simple para mostrar propiedades y recibir consultas. Con el tiempo, evolucionó hacia un CMS (Sistema de Gestión de Contenidos) a medida, permitiendo administrar directamente las propiedades publicadas, los filtros de búsqueda, textos del sitio y formularios de contacto.',
            'Hoy en día representa una plataforma administrativa completa enfocada en optimizar la gestión inmobiliaria diaria. Actualmente, el sistema se encuentra en fase beta, operando con datos mock (simulados) a modo de demostración para exhibir todo el potencial y las funcionalidades de la plataforma.',
          ],
          mainFeatures: [
            'Sistema de roles y permisos de usuario',
            'Dashboard administrativo para la gestión del sistema',
            'Herramientas para administrar consultas de clientes',
            'Panel de control para la gestión dinámica de propiedades y contenido',
          ],
        },
        en: {
          title: 'SullivanMór Real Estate',
          intro: 'Real estate platform with advanced filters and property management',
          story: [
            '<strong>SullivanMór</strong> emerged as a strategic solution to establish an exclusive digital sales channel. The initiative aimed to professionalize property listings, moving away from dependency on third-party platforms toward a proprietary ecosystem with full control over data.',
            'It started as a simple landing page to showcase properties and receive inquiries. Over time, it evolved into a custom CMS (Content Management System), allowing direct management of published listings, search filters, site content, and contact forms.',
            "Today it represents a complete administrative platform focused on optimizing daily real estate operations. Currently in beta, running on mock data to showcase the platform's full potential and feature set.",
          ],
          mainFeatures: [
            'Role-based access control system',
            'Administrative dashboard for system management',
            'Tools to manage and track client inquiries',
            'Control panel for dynamic property and content management',
          ],
        },
      },
      stack: ['Angular', 'Spring Boot', 'MySQL'],
      technologies: ['Spring Security', 'Google Maps', 'Hateoas', 'Tailwind CSS'],
      githubLink: 'https://github.com/JuanVaccarezza06/front-end-sullivan-m-r',
      codeFilename: 'filter.service.ts',
      codeLanguage: 'typescript',
      demoLink: '',
      videoUrl: 'sullivanmor-preview.mp4',
      code: `import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, switchMap, shareReplay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FilterService {
  private http = inject(HttpClient);
  private criteria$ = new BehaviorSubject<Criteria>({});

  public properties$ = this.criteria$.pipe(
    debounceTime(300),
    switchMap(c => this.http.get('/api/properties', { params: c })),
    shareReplay(1)
  );

  public update(newCriteria: Criteria) {
    this.criteria$.next({ ...this.criteria$.value, ...newCriteria });
  }
}`,
    },
    {
      id: 'smart-sheet-reporter',
      translations: {
        es: {
          title: 'Smart Sheet Reporter',
          intro:
            'Aplicación web full-stack para el procesamiento dinámico de archivos Excel y la generación automatizada de reportes mediante plantillas.',
          story: [
            '<strong>Smart Sheet Reporter</strong> fue desarrollado para transformar datos tabulares en documentos estructurados y listos para descargar. En este sistema, el Excel funciona como una base de datos: cada fila contiene la información necesaria para crear un documento, como puede ser una factura comercial, un reporte o un certificado.',
            'La plataforma cuenta con una interfaz fluida construida en Angular, que se comunica con un robusto backend en Java. El proceso es muy intuitivo: al cargar los datos, el motor del sistema lee el archivo en memoria y relaciona dinámicamente las columnas del Excel con palabras clave o campos definidos previamente en una plantilla de diseño.',
            'De esta forma, el sistema procesa la información de forma instantánea para generar documentos individuales, empaquetándolos en un archivo ZIP. La mayor fortaleza de esta arquitectura es su lógica altamente reutilizable: basta con agregar las reglas de tu negocio a los documentos origen, y el sistema se adaptara fácilmente a diferentes contextos de negocio sin necesidad de modificar el código.',
          ],
          mainFeatures: [
            'Lectura y parseo dinámico de archivos Excel (.xlsx)',
            'Generación automatizada de documentos a partir de plantillas',
            'Empaquetado y descarga de reportes en archivos ZIP',
            'Interfaz de usuario moderna e intuitiva',
          ],
        },
        en: {
          title: 'Smart Sheet Reporter',
          intro:
            'Full-stack web app for dynamic Excel file processing and automated report generation from templates.',
          story: [
            '<strong>Smart Sheet Reporter</strong> was built to transform tabular data into structured, ready-to-download documents. In this system, the Excel file acts as a database: each row contains the data needed to produce a document, such as a commercial invoice, a report, or a certificate.',
            'The platform features a smooth Angular interface that communicates with a robust Java backend. The workflow is intuitive: once data is uploaded, the engine reads the file in memory and dynamically maps Excel columns to keywords or fields pre-defined in a design template.',
            "The system then instantly generates individual documents and packages them into a ZIP file. The architecture's biggest strength is its highly reusable logic — just add your business rules to the source documents and the system adapts seamlessly to different business contexts without any code changes.",
          ],
          mainFeatures: [
            'Dynamic reading and parsing of Excel files (.xlsx)',
            'Automated document generation from templates',
            'Report packaging and download as ZIP files',
            'Modern and intuitive user interface',
          ],
        },
      },
      stack: ['Java', 'Angular', 'TypeScript'],
      technologies: ['Apache POI', 'Tailwind CSS', 'Manejo de Memoria'],
      githubLink: 'https://github.com/juanvaccarezza06/smart-sheet-reporter',
      codeFilename: 'ExcelUtils.java',
      codeLanguage: 'java',
      demoLink: '',
      videoUrl: 'smart-sheet-reporter-preview.mp4',
      code: `package com.smart_sheet.smart_sheet;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.InputStream;
import java.util.*;

public class ExcelUtils {

    public static List<DataRow> readExcel(InputStream is) throws Exception {
        List<DataRow> rows = new ArrayList<>();
        List<String> headers = new ArrayList<>();
        DataFormatter formatter = new DataFormatter();

        try (Workbook workbook = new XSSFWorkbook(is)) {
            for (Row row : workbook.getSheetAt(0)) {
                if (headers.isEmpty()) {
                    row.forEach(cell -> headers.add(formatter.formatCellValue(cell).trim()));
                } else {
                    Map<String, String> rowData = new HashMap<>();
                    for (int i = 0; i < headers.size(); i++) {
                        rowData.put(headers.get(i), formatter.formatCellValue(row.getCell(i)));
                    }
                    rows.add(new DataRow(rowData));
                }
            }
        }
        return rows;
    }
}`,
    },
    {
      id: 'beach-resort-system',
      translations: {
        es: {
          title: 'Sistema de Gestión de Balneario',
          intro:
            'Sistema integral por consola para la administración completa de un complejo de playa y sus servicios.',
          story: [
            '<strong>Sistema de Gestión de Balneario</strong> fue desarrollado como Trabajo Final para la materia Programación II, con el objetivo de aplicar conceptos avanzados de Programación Orientada a Objetos en un caso de uso real y complejo.',
            'La plataforma fue diseñada para gestionar el día a día de un complejo de playa, resolviendo la asignación de carpas, sombrillas y cocheras, así como el control de los empleados, puestos comerciales y atención médica.',
            'A nivel técnico, destaca por prescindir de bases de datos relacionales estándar en favor de un sistema de almacenamiento y persistencia propio basado en archivos JSON, implementando clases genéricas para un manejo dinámico y eficiente de las colecciones de datos. Te invito a explorar el código en su repositorio.',
          ],
          mainFeatures: [
            'Gestión integral de reservas y contratos',
            'Arquitectura basada en Clases Genéricas y herencia abstracta',
            'Sistema robusto de manejo de excepciones personalizadas',
            'Control de estado y disponibilidad de servicios en tiempo real',
            'Persistencia de datos customizada mediante lectura/escritura de archivos JSON',
          ],
        },
        en: {
          title: 'Beach Resort Management System',
          intro:
            'Comprehensive console-based system for the full administration of a beach resort and its services.',
          story: [
            '<strong>Beach Resort Management System</strong> was developed as a final project for the Programming II course, with the goal of applying advanced Object-Oriented Programming concepts to a real-world, complex use case.',
            'The platform was designed to manage the day-to-day operations of a beach resort, handling the assignment of beach tents, umbrellas, and parking spots, as well as managing staff, commercial stands, and medical services.',
            'On the technical side, it stands out for forgoing standard relational databases in favor of a custom storage and persistence system based on JSON files, leveraging generic classes for dynamic and efficient data collection handling. I invite you to explore the code in its repository.',
          ],
          mainFeatures: [
            'Comprehensive reservation and contract management',
            'Architecture based on Generic Classes and abstract inheritance',
            'Robust custom exception handling system',
            'Real-time service availability and status control',
            'Custom data persistence via JSON file read/write',
          ],
        },
      },
      stack: ['Java', 'JSON'],
      technologies: ['POO', 'Generics', 'Collections'],
      githubLink: 'https://github.com/juanvaccarezza06/beach-resort-system',
      codeFilename: 'Almacenamiento.java',
      codeLanguage: 'java',
      demoLink: '',
      videoUrl: 'beach-resort-preview.mp4',
      code: `package PackageGenerico;

import PackageAbstract.Modelo;
import PackageException.CadenaVacia;
import PackageException.DatoNulo;
import java.util.*;

public class Almacenamiento<T extends Modelo> {

    Set<T> lista;

    public Almacenamiento() {
        this.lista = new LinkedHashSet<>();
    }

    public void agregarObjeto(T o) throws DatoNulo {
        if (o != null) {
            lista.add(o);
        } else {
            throw new DatoNulo();
        }
    }

    public T buscarObjeto(String ID) throws CadenaVacia {
        if (!ID.isEmpty()) {
            for (T t : lista) {
                if (t.getId().equals(ID)) {
                    return t;
                }
            }
        } else {
            throw new CadenaVacia();
        }
        return null;
    }
}`,
    },
  ];

  email: string = 'juanpirvaccarezza@gmail.com';
  github: string = 'https://github.com/JuanVaccarezza06';
  linkedin: string = 'https://www.linkedin.com/in/juan-pablo-vaccarezza-ab2719263/';

  expandedProjectId = signal<string | null>(null);
  isVideoModalOpen = signal(false);
  currentVideoUrl = signal<string>('');
  mobileMenuOpen = signal(false);

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((v) => !v);
  }

  toggleProject(projectId: string): void {
    const current = this.expandedProjectId();
    if (current === projectId) {
      this.expandedProjectId.set(null);
      return;
    }
    if (current !== null) {
      this.expandedProjectId.set(null);
      setTimeout(() => {
        this.expandedProjectId.set(projectId);
        this.scrollToCard(projectId);
      }, 50);
    } else {
      this.expandedProjectId.set(projectId);
      this.scrollToCard(projectId);
    }
  }

  scrollToCard(projectId: string): void {
    setTimeout(() => {
      const element = document.getElementById(projectId);
      if (element) {
        const headerHeight = 90;
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementTop - headerHeight - 16, behavior: 'smooth' });
      }
    }, 220);
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -50px 0px',
      },
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }

  scrollToSection(sectionId: string): void {
    this.mobileMenuOpen.set(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  openVideoModal(videoUrl: string): void {
    this.currentVideoUrl.set(videoUrl);
    this.isVideoModalOpen.set(true);
  }

  closeVideoModal(): void {
    this.isVideoModalOpen.set(false);
    this.currentVideoUrl.set('');
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.mobileMenuOpen()) {
      this.mobileMenuOpen.set(false);
      return;
    }
    this.closeVideoModal();
  }
}
