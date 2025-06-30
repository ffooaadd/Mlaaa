"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, GraduationCap, FileText, ChevronRight, Sparkles, Crown, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [selectedStage, setSelectedStage] = useState<string | null>(null)
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null)

  const stages = {
    primary: {
      name: "المرحلة الابتدائية",
      grades: [
        "الأول الابتدائي",
        "الثاني الابتدائي",
        "الثالث الابتدائي",
        "الرابع الابتدائي",
        "الخامس الابتدائي",
        "السادس الابتدائي",
      ],
      color: "from-amber-900 to-orange-800",
      icon: "🎒",
    },
    middle: {
      name: "المرحلة الإعدادية",
      grades: ["الأول الإعدادي", "الثاني الإعدادي", "الثالث الإعدادي"],
      color: "from-red-900 to-rose-800",
      icon: "📖",
    },
    high: {
      name: "المرحلة الثانوية",
      grades: ["الأول الثانوي", "الثاني الثانوي", "الثالث الثانوي"],
      color: "from-purple-900 to-indigo-800",
      icon: "🎓",
    },
  }

  const subjects = [
    { name: "الرياضيات", icon: "🔢", color: "from-red-800 to-pink-700" },
    { name: "اللغة العربية", icon: "📝", color: "from-amber-800 to-yellow-700" },
    { name: "اللغة الإنجليزية", icon: "🌍", color: "from-blue-800 to-cyan-700" },
    { name: "العلوم", icon: "🔬", color: "from-green-800 to-emerald-700" },
    { name: "التاريخ", icon: "🏛️", color: "from-orange-800 to-red-700" },
    { name: "الجغرافيا", icon: "🗺️", color: "from-teal-800 to-blue-700" },
    { name: "التربية الإسلامية", icon: "🕌", color: "from-emerald-800 to-green-700" },
    { name: "الفيزياء", icon: "⚡", color: "from-purple-800 to-violet-700" },
    { name: "الكيمياء", icon: "🧪", color: "from-indigo-800 to-blue-700" },
    { name: "الأحياء", icon: "🧬", color: "from-lime-800 to-green-700" },
  ]

  const handleSubjectClick = () => {
    window.open("https://t.me/XD6_bot", "_blank")
  }

  const resetToHome = () => {
    setSelectedOption(null)
    setSelectedStage(null)
    setSelectedGrade(null)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Complex Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-amber-950">
        {/* Animated Gradient Layers */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-red-900/20 to-orange-900/30"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(146, 64, 14, 0.3), rgba(127, 29, 29, 0.2), rgba(154, 52, 18, 0.3))",
              "linear-gradient(135deg, rgba(154, 52, 18, 0.3), rgba(146, 64, 14, 0.2), rgba(127, 29, 29, 0.3))",
              "linear-gradient(225deg, rgba(127, 29, 29, 0.3), rgba(154, 52, 18, 0.2), rgba(146, 64, 14, 0.3))",
              "linear-gradient(315deg, rgba(146, 64, 14, 0.3), rgba(127, 29, 29, 0.2), rgba(154, 52, 18, 0.3))",
            ],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* Floating Geometric Shapes */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-amber-600/20 to-red-600/20 rounded-lg backdrop-blur-sm border border-amber-500/10" />
          </motion.div>
        ))}

        {/* Luxury Particles */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Luxury Header */}
      <motion.header
        className="relative z-10 p-8 text-center"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
      >
        <motion.div
          className="relative inline-block cursor-pointer"
          onClick={resetToHome}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Crown Icon */}
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            <Crown className="w-12 h-12 text-amber-400" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 mb-4 relative"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            style={{ backgroundSize: "200% 200%" }}
          >
            ملازمي الأفضل
            {/* Sparkle Effects */}
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <Sparkles className="w-8 h-8 text-amber-400" />
            </motion.div>
            <motion.div
              className="absolute -bottom-2 -left-2"
              animate={{ rotate: -360, scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
            >
              <Star className="w-6 h-6 text-orange-400" />
            </motion.div>
          </motion.h1>

          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full mb-4"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-amber-200 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          المنصة الملكية للتعليم الذكي والمتميز
        </motion.p>
      </motion.header>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {!selectedOption && (
            <motion.div
              key="home"
              className="max-w-7xl mx-auto"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            >
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400 mb-6">
                  اختر رحلتك التعليمية الملكية
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mb-6" />
                <p className="text-amber-100 text-lg max-w-2xl mx-auto leading-relaxed">
                  استكشف عالماً من المعرفة والتميز مع أفضل المصادر التعليمية المتاحة
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    id: "notes",
                    title: "ملازم دراسية",
                    icon: BookOpen,
                    desc: "مجموعة شاملة من الملازم المتميزة لجميع المراحل الدراسية",
                    gradient: "from-amber-800 via-orange-700 to-red-800",
                    shadowColor: "shadow-amber-500/25",
                  },
                  {
                    id: "books",
                    title: "كتب مدرسية",
                    icon: GraduationCap,
                    desc: "كتب منهجية معتمدة ومطورة بأحدث المعايير التعليمية",
                    gradient: "from-red-800 via-rose-700 to-pink-800",
                    shadowColor: "shadow-red-500/25",
                  },
                  {
                    id: "exams",
                    title: "الأسئلة الوزارية",
                    icon: FileText,
                    desc: "مجموعة شاملة من الأسئلة الوزارية والامتحانات النموذجية",
                    gradient: "from-orange-800 via-amber-700 to-yellow-800",
                    shadowColor: "shadow-orange-500/25",
                  },
                ].map((option, index) => (
                  <motion.div
                    key={option.id}
                    initial={{ opacity: 0, y: 100, rotateX: 45 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.8 + index * 0.3,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -20,
                      rotateY: 5,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group perspective-1000"
                  >
                    <Card
                      className={`relative overflow-hidden bg-gradient-to-br ${option.gradient} backdrop-blur-xl border-2 border-amber-500/30 hover:border-amber-400/50 transition-all duration-500 cursor-pointer ${option.shadowColor} shadow-2xl hover:shadow-3xl`}
                      onClick={() => setSelectedOption(option.id)}
                    >
                      {/* Luxury Border Animation */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                      />

                      <CardContent className="relative p-8 sm:p-10 text-center">
                        {/* Icon Container */}
                        <motion.div
                          className="relative mb-8"
                          whileHover={{
                            rotate: [0, -10, 10, 0],
                            scale: 1.2,
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="relative">
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-orange-400/30 rounded-full blur-xl"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            />
                            <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-amber-400/30">
                              <option.icon className="w-10 h-10 sm:w-12 sm:h-12 text-amber-300 group-hover:text-amber-200 transition-colors duration-300" />
                            </div>
                          </div>
                        </motion.div>

                        <h3 className="text-xl sm:text-2xl font-bold text-amber-100 mb-4 group-hover:text-white transition-colors duration-300">
                          {option.title}
                        </h3>

                        <p className="text-amber-200/80 text-sm sm:text-base leading-relaxed mb-6 group-hover:text-amber-100/90 transition-colors duration-300">
                          {option.desc}
                        </p>

                        {/* Luxury Button */}
                        <motion.div
                          className="flex items-center justify-center space-x-2 space-x-reverse"
                          whileHover={{ x: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="text-amber-300 font-semibold">استكشف الآن</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <ChevronRight className="w-6 h-6 text-amber-400" />
                          </motion.div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {selectedOption === "notes" && !selectedStage && (
            <motion.div
              key="stages"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
              className="max-w-6xl mx-auto"
            >
              <div className="flex items-center justify-between mb-12">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={resetToHome}
                    className="bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    ← العودة للرئيسية
                  </Button>
                </motion.div>

                <motion.h2
                  className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  اختر المرحلة الدراسية
                </motion.h2>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {Object.entries(stages).map(([key, stage], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -15,
                      rotateY: 10,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group perspective-1000"
                  >
                    <Card
                      className={`relative overflow-hidden bg-gradient-to-br ${stage.color} backdrop-blur-xl border-2 border-amber-500/30 hover:border-amber-400/50 transition-all duration-500 cursor-pointer shadow-2xl hover:shadow-3xl`}
                      onClick={() => setSelectedStage(key)}
                    >
                      <CardContent className="relative p-10 text-center">
                        <motion.div
                          className="text-6xl mb-6"
                          whileHover={{
                            rotate: [0, -15, 15, 0],
                            scale: 1.2,
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          {stage.icon}
                        </motion.div>

                        <h3 className="text-2xl font-bold text-amber-100 mb-4 group-hover:text-white transition-colors duration-300">
                          {stage.name}
                        </h3>

                        <div className="flex items-center justify-center space-x-2 space-x-reverse text-amber-200/80 mb-6">
                          <span>{stage.grades.length}</span>
                          <span>صفوف دراسية</span>
                        </div>

                        <motion.div
                          className="flex items-center justify-center space-x-2 space-x-reverse"
                          whileHover={{ x: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="text-amber-300 font-semibold">اختر الصف</span>
                          <ChevronRight className="w-6 h-6 text-amber-400" />
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {selectedStage && !selectedGrade && (
            <motion.div
              key="grades"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
              className="max-w-7xl mx-auto"
            >
              <div className="flex items-center justify-between mb-12">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => setSelectedStage(null)}
                    className="bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    ← العودة للمراحل
                  </Button>
                </motion.div>

                <motion.h2
                  className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {stages[selectedStage as keyof typeof stages].name}
                </motion.h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {stages[selectedStage as keyof typeof stages].grades.map((grade, index) => {
                  // أيقونات مختلفة لكل صف
                  const gradeIcons = [
                    { icon: Sparkles, color: "text-yellow-400", bgColor: "from-yellow-500/20 to-amber-500/20" },
                    { icon: Star, color: "text-blue-400", bgColor: "from-blue-500/20 to-cyan-500/20" },
                    { icon: Crown, color: "text-purple-400", bgColor: "from-purple-500/20 to-pink-500/20" },
                    { icon: BookOpen, color: "text-green-400", bgColor: "from-green-500/20 to-emerald-500/20" },
                    { icon: GraduationCap, color: "text-orange-400", bgColor: "from-orange-500/20 to-red-500/20" },
                    { icon: FileText, color: "text-indigo-400", bgColor: "from-indigo-500/20 to-violet-500/20" },
                  ]

                  const iconData = gradeIcons[index % gradeIcons.length]
                  const IconComponent = iconData.icon

                  return (
                    <motion.div
                      key={grade}
                      initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 120,
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -10,
                        rotateX: 5,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="group"
                    >
                      <Card
                        className="relative overflow-hidden bg-gradient-to-br from-amber-800/80 to-orange-800/80 backdrop-blur-xl border-2 border-amber-500/30 hover:border-amber-400/50 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl"
                        onClick={() => setSelectedGrade(grade)}
                      >
                        {/* تأثير اللمعان */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 4 }}
                        />

                        <CardContent className="relative p-6 sm:p-8 text-center">
                          {/* حاوي الأيقونة المتطور */}
                          <motion.div
                            className="relative mb-6"
                            whileHover={{
                              rotate: [0, -10, 10, -5, 5, 0],
                              scale: 1.2,
                            }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                          >
                            {/* خلفية الأيقونة المتحركة */}
                            <motion.div
                              className={`absolute inset-0 bg-gradient-to-br ${iconData.bgColor} rounded-full blur-xl`}
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.3, 0.6, 0.3],
                              }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            />

                            {/* دائرة الأيقونة الرئيسية */}
                            <motion.div
                              className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-amber-400/30"
                              animate={{
                                boxShadow: [
                                  "0 0 20px rgba(251, 191, 36, 0.3)",
                                  "0 0 40px rgba(251, 191, 36, 0.5)",
                                  "0 0 20px rgba(251, 191, 36, 0.3)",
                                ],
                              }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            >
                              {/* الأيقونة مع حركات متقدمة */}
                              <motion.div
                                animate={{
                                  rotate: [0, 5, -5, 0],
                                  scale: [1, 1.1, 1],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: "easeInOut",
                                }}
                              >
                                <IconComponent
                                  className={`w-8 h-8 sm:w-10 sm:h-10 ${iconData.color} group-hover:text-amber-200 transition-colors duration-300`}
                                />
                              </motion.div>

                              {/* جسيمات متطايرة حول الأيقونة */}
                              {[...Array(6)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="absolute w-1 h-1 bg-amber-400 rounded-full"
                                  style={{
                                    top: "50%",
                                    left: "50%",
                                  }}
                                  animate={{
                                    x: [0, Math.cos((i * 60 * Math.PI) / 180) * 30],
                                    y: [0, Math.sin((i * 60 * Math.PI) / 180) * 30],
                                    opacity: [0, 1, 0],
                                    scale: [0, 1, 0],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: i * 0.2,
                                    ease: "easeInOut",
                                  }}
                                />
                              ))}
                            </motion.div>
                          </motion.div>

                          <h3 className="text-lg sm:text-xl font-bold text-amber-100 mb-4 group-hover:text-white transition-colors duration-300">
                            {grade}
                          </h3>

                          <motion.div
                            className="flex items-center justify-center space-x-2 space-x-reverse"
                            whileHover={{ x: 8 }}
                            transition={{ duration: 0.3 }}
                          >
                            <span className="text-amber-300 font-semibold text-sm">اختر المادة</span>
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                            >
                              <ChevronRight className="w-5 h-5 text-amber-400" />
                            </motion.div>
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}

          {selectedGrade && (
            <motion.div
              key="subjects"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
              className="max-w-7xl mx-auto"
            >
              <div className="flex items-center justify-between mb-12">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => setSelectedGrade(null)}
                    className="bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    ← العودة للصفوف
                  </Button>
                </motion.div>

                <motion.h2
                  className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  مواد {selectedGrade}
                </motion.h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {subjects.map((subject, index) => (
                  <motion.div
                    key={subject.name}
                    initial={{ opacity: 0, scale: 0.3, rotateY: 180 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      scale: 1.08,
                      y: -15,
                      rotateX: 10,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.92 }}
                    className="group perspective-1000"
                  >
                    <Card
                      className={`relative overflow-hidden bg-gradient-to-br ${subject.color} backdrop-blur-xl border-2 border-amber-500/30 hover:border-amber-400/60 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl`}
                      onClick={handleSubjectClick}
                    >
                      {/* Luxury Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                      />

                      <CardContent className="relative p-6 sm:p-8 text-center">
                        {/* أيقونة الإيموجي المحسنة */}
                        <motion.div
                          className="relative mb-4"
                          whileHover={{
                            rotate: [0, -20, 20, 0],
                            scale: 1.3,
                          }}
                          transition={{ duration: 0.6 }}
                        >
                          {/* خلفية متوهجة للإيموجي */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-lg"
                            animate={{
                              scale: [1, 1.4, 1],
                              opacity: [0.2, 0.5, 0.2],
                            }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          />

                          <motion.div
                            className="relative text-3xl sm:text-4xl"
                            animate={{
                              y: [0, -5, 0],
                              rotate: [0, 2, -2, 0],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                          >
                            {subject.icon}
                          </motion.div>
                        </motion.div>

                        <h3 className="text-base sm:text-lg font-bold text-amber-100 mb-3 group-hover:text-white transition-colors duration-300">
                          {subject.name}
                        </h3>

                        <p className="text-amber-200/70 text-xs mb-4 group-hover:text-amber-100/80 transition-colors duration-300">
                          اضغط للوصول للبوت
                        </p>

                        <motion.div
                          className="flex items-center justify-center space-x-1 space-x-reverse"
                          animate={{ x: [0, 8, 0] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <span className="text-amber-300 font-semibold text-sm">ابدأ الآن</span>
                          <ChevronRight className="w-4 h-4 text-amber-400" />
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {(selectedOption === "books" || selectedOption === "exams") && (
            <motion.div
              key="coming-soon"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mb-8">
                <Button
                  onClick={resetToHome}
                  className="bg-gradient-to-r from-amber-700 to-orange-700 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  ← العودة للرئيسية
                </Button>
              </motion.div>

              <motion.div
                className="relative bg-gradient-to-br from-amber-900/50 to-orange-900/50 backdrop-blur-xl border-2 border-amber-500/30 rounded-3xl p-16 shadow-2xl"
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="mb-8"
                >
                  {selectedOption === "books" ? (
                    <GraduationCap className="w-24 h-24 mx-auto text-amber-400" />
                  ) : (
                    <FileText className="w-24 h-24 mx-auto text-orange-400" />
                  )}
                </motion.div>

                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400 mb-6">
                  {selectedOption === "books" ? "الكتب المدرسية" : "الأسئلة الوزارية"}
                </h2>

                <p className="text-amber-200 text-xl mb-10 leading-relaxed">
                  هذا القسم الملكي قيد التطوير وسيكون متاحاً قريباً بإذن الله
                  <br />
                  مع أفضل المحتويات التعليمية المتميزة
                </p>

                <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={handleSubjectClick}
                    className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-500 hover:via-orange-500 hover:to-red-500 text-white px-12 py-4 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    تواصل معنا عبر البوت الملكي
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Luxury Footer */}
      <motion.footer
        className="relative z-10 text-center py-8 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-6" />
        <p className="text-amber-300/80 font-medium">© 2024 ملازمي الأفضل - المنصة الملكية للتعليم الذكي والمتميز</p>
      </motion.footer>
    </div>
  )
}
