const LEGACY_CATEGORIES = [
  { id: 'grilled', label: '🔥 مشويات', order: 0 },
  { id: 'broasted', label: '🍗 بروستد', order: 1 },
  { id: 'shawarma', label: '🌯 شاورما', order: 2 },
  { id: 'western', label: '🍔 غربية', order: 3 },
  { id: 'prince', label: '👑 البرنس', order: 4 },
  { id: 'fatteh', label: '🥙 فتة', order: 5 },
  { id: 'sandwiches', label: '🥪 سندوتشات', order: 6 },
  { id: 'appetizers', label: '🍟 مقبلات', order: 7 },
];

const LEGACY_ITEMS = [
  { id: 'g1', name: 'فرخة مشوية كاملة', emoji: '🍗', price: 400, description: 'فرخة مشوية كاملة على الفحم', includes: 'أرز بسمتي • رغيفا عيش • تومية • مخلل', category: 'grilled', tag: '🔥 الأكثر طلباً', available: true, order: 0 },
  { id: 'g2', name: 'فرخة مشوية سادة', emoji: '🍗', price: 360, description: 'فرخة مشوية بدون ملحقات', includes: 'الفرخة فقط', category: 'grilled', available: true, order: 1 },
  { id: 'g3', name: 'نصف فرخة مشوية', emoji: '🍗', price: 210, description: 'نصف فرخة مشوية على الفحم', includes: 'أرز بسمتي • بطاطس • رغيف عيش • تومية • مخلل', category: 'grilled', available: true, order: 2 },
  { id: 'g4', name: 'دبل ورك مشوي', emoji: '🦵', price: 180, description: 'ورك مضاعف مشوي', includes: 'قطعتا ورك مشوية على الفحم', category: 'grilled', available: true, order: 3 },
  { id: 'g5', name: 'ربع صدر مشوي', emoji: '🍗', price: 130, description: 'ربع صدر مشوي', includes: 'أرز بسمتي • بطاطس • رغيف عيش • تومية • مخلل', category: 'grilled', available: true, order: 4 },
  { id: 'g6', name: 'ربع ورك مشوي', emoji: '🦵', price: 120, description: 'ربع ورك مشوي', includes: 'أرز بسمتي • بطاطس • رغيف عيش • تومية • مخلل', category: 'grilled', available: true, order: 5 },
  { id: 'b1', name: 'بروستد عائلية', emoji: '🍗', price: 425, description: '10 قطع بروستد مقرمش', includes: 'أرز بسمتي • بطاطس • 4 أرغفة • تومية • كاتشب • مخلل • سبايسي', category: 'broasted', tag: '👨‍👩‍👧‍👦 عائلي', available: true, order: 0 },
  { id: 'b2', name: 'فرخة بروستد كاملة', emoji: '🍗', price: 400, description: '5 قطع بروستد', includes: 'أرز بسمتي • بطاطس • 3 أرغفة • تومية • كاتشب • مخلل • سبايسي', category: 'broasted', available: true, order: 1 },
  { id: 'b3', name: 'نصف فرخة بروستد', emoji: '🍗', price: 220, description: '3 قطع بروستد', includes: 'أرز بسمتي • بطاطس • رغيفا عيش • تومية • كاتشب • مخلل • سبايسي', category: 'broasted', available: true, order: 2 },
  { id: 'b4', name: 'قطع دبوس 5 قطع', emoji: '🍗', price: 210, description: '5 قطع دبوس', includes: 'أرز بسمتي • بطاطس • رغيفا عيش • تومية • كاتشب • مخلل • سبايسي', category: 'broasted', available: true, order: 3 },
  { id: 'b5', name: 'حوايج بروستد', emoji: '🕊️', price: 130, description: '5 حمام بروستد', includes: 'أرز بسمتي • بطاطس • رغيف عيش • مخلل', category: 'broasted', available: true, order: 4 },
  { id: 'b6', name: 'ربع فرخة بروستد', emoji: '🍗', price: 140, description: 'قطعتان بروستد', includes: 'أرز بسمتي • بطاطس • رغيف عيش • مخلل', category: 'broasted', available: true, order: 5 },
  { id: 'b7', name: '3 فراخ بروستد صغيرة', emoji: '🐣', price: 150, description: '3 فراخ صغيرة', includes: 'فراخ صغيرة مقرمشة', category: 'broasted', available: true, order: 6 },
  { id: 'b8', name: '5 فراخ بروستد صغيرة', emoji: '🐣', price: 215, description: '5 فراخ صغيرة', includes: 'فراخ صغيرة مقرمشة', category: 'broasted', available: true, order: 7 },
  { id: 'sh1', name: 'ربع كيلو شاورما فراخ', emoji: '🌯', price: 160, description: 'ربع كيلو شاورما دجاج', includes: 'بطاطس • رغيف عيش • تومية • مخلل', category: 'shawarma', available: true, order: 0 },
  { id: 'sh2', name: 'ربع كيلو شاورما لحمة', emoji: '🥩', price: 175, description: 'ربع كيلو شاورما لحمة', includes: 'بطاطس • رغيف عيش • طحينة • مخلل', category: 'shawarma', available: true, order: 1 },
  { id: 'sh3', name: 'ربع كيلو شاورما مكس', emoji: '🌯', price: 175, description: 'ربع كيلو لحمة وفراخ', includes: 'بطاطس • رغيف عيش • تومية • مخلل', category: 'shawarma', available: true, order: 2 },
  { id: 'sh4', name: 'نصف كيلو شاورما فراخ', emoji: '🌯', price: 285, description: 'نصف كيلو شاورما دجاج', includes: 'بطاطس • عيش • تومية • مخلل', category: 'shawarma', available: true, order: 3 },
  { id: 'sh5', name: 'نصف كيلو شاورما لحمة', emoji: '🥩', price: 335, description: 'نصف كيلو شاورما لحمة', includes: 'بطاطس • عيش • طحينة • مخلل', category: 'shawarma', available: true, order: 4 },
  { id: 'sh6', name: 'نصف كيلو شاورما مكس', emoji: '🌯', price: 335, description: 'نصف كيلو لحمة وفراخ', includes: 'بطاطس • عيش • تومية • مخلل', category: 'shawarma', available: true, order: 5 },
  { id: 'sh7', name: 'نصف كيلو شيش طاووق', emoji: '🍢', price: 285, description: 'نصف كيلو شيش طاووق', includes: 'بطاطس • عيش • تومية • مخلل', category: 'shawarma', available: true, order: 6 },
  { id: 'sh8', name: 'نصف كيلو كرسبي', emoji: '🍗', price: 285, description: 'نصف كيلو كرسبي', includes: 'بطاطس • عيش • تومية • مخلل', category: 'shawarma', available: true, order: 7 },
  { id: 'sh9', name: 'نصف كيلو زنجر', emoji: '🍗', price: 285, description: 'نصف كيلو زنجر', includes: 'بطاطس • عيش • تومية • مخلل', category: 'shawarma', available: true, order: 8 },
  { id: 'sh10', name: 'كيلو شاورما فراخ', emoji: '🌯', price: 550, description: 'كيلو شاورما دجاج', includes: 'بطاطس • عيش • تومية • مخلل', category: 'shawarma', tag: '👑 قيمة', available: true, order: 9 },
  { id: 'sh11', name: 'كيلو شاورما لحمة', emoji: '🥩', price: 650, description: 'كيلو شاورما لحمة', includes: 'بطاطس • عيش • طحينة • مخلل', category: 'shawarma', tag: '👑 قيمة', available: true, order: 10 },
  { id: 'sh12', name: 'كيلو شاورما مكس', emoji: '🌯', price: 650, description: 'كيلو لحمة وفراخ', includes: 'بطاطس • عيش • تومية • مخلل', category: 'shawarma', tag: '👑 قيمة', available: true, order: 11 },
  { id: 'sh13', name: 'كيلو شيش طاووق', emoji: '🍢', price: 550, description: 'كيلو شيش طاووق', includes: 'بطاطس • عيش • تومية • مخلل', category: 'shawarma', available: true, order: 12 },
  { id: 'sh14', name: 'كيلو كرسبي', emoji: '🍗', price: 550, description: 'كيلو كرسبي', includes: 'بطاطس • عيش • تومية • مخلل', category: 'shawarma', available: true, order: 13 },
  { id: 'sh15', name: 'كيلو زنجر', emoji: '🍗', price: 550, description: 'كيلو زنجر', includes: 'بطاطس • عيش • تومية • مخلل', category: 'shawarma', available: true, order: 14 },
  { id: 'w1', name: 'وجبة شيش طاووق', emoji: '🍢', price: 165, description: 'سيخ شيش طاووق كامل', includes: 'أرز بسمتي • بطاطس • رغيف عيش • تومية • مخلل', category: 'western', available: true, order: 0 },
  { id: 'w2', name: 'وجبة كرسبي', emoji: '🍗', price: 165, description: 'فراخ كرسبي مقرمشة', includes: 'أرز بسمتي • بطاطس • رغيف عيش • تومية • مخلل', category: 'western', available: true, order: 1 },
  { id: 'w3', name: 'وجبة زنجر', emoji: '🍗', price: 165, description: 'زنجر بتبيلة خاصة', includes: 'أرز بسمتي • بطاطس • رغيف عيش • تومية • مخلل', category: 'western', available: true, order: 2 },
  { id: 'w4', name: 'وجبة إسكالوب دجاج', emoji: '🍖', price: 170, description: 'إسكالوب دجاج مميز', includes: 'أرز بسمتي • بطاطس • رغيف عيش • تومية • مخلل', category: 'western', available: true, order: 3 },
  { id: 'w5', name: 'وجبة فاهيتا / مكسيكي', emoji: '🌮', price: 175, description: 'فاهيتا دجاج بتوابل مكسيكية', includes: 'أرز بسمتي • بطاطس • رغيف عيش • تومية • مخلل', category: 'western', available: true, order: 4 },
  { id: 'p1', name: 'وجبة المشكل البرنس السوري', emoji: '👑', price: 240, description: 'الطبق الملكي الأشمل — تجربة لا تُنسى!', includes: 'أرز بسمتي • بطاطس • سيخ شيش طاووق • شاورما لحمة • شاورما فراخ • سلطة كول سلو • رغيف عيش • مخلل', category: 'prince', tag: '👑 التوصية رقم 1', available: true, order: 0 },
  { id: 'f1', name: 'فتة شاورما فراخ وجبة', emoji: '🥙', price: 130, description: 'فتة شاورما فراخ كاملة', includes: 'أرز بسمتي • بطاطس • تومية • مخلل', category: 'fatteh', tag: '💚 وجبة', available: true, order: 0 },
  { id: 'f2', name: 'فتة شاورما فراخ عادي', emoji: '🥙', price: 85, description: 'فتة شاورما فراخ', includes: 'الفتة فقط', category: 'fatteh', available: true, order: 1 },
  { id: 'f3', name: 'فتة شاورما لحمة وجبة', emoji: '🥩', price: 165, description: 'فتة شاورما لحمة كاملة', includes: 'أرز بسمتي • بطاطس • تومية • مخلل', category: 'fatteh', tag: '💚 وجبة', available: true, order: 2 },
  { id: 'f4', name: 'فتة شاورما لحمة عادي', emoji: '🥩', price: 95, description: 'فتة شاورما لحمة', includes: 'الفتة فقط', category: 'fatteh', available: true, order: 3 },
  { id: 'f5', name: 'فتة شاورما مكس', emoji: '🌯', price: 145, description: 'فتة لحمة وفراخ', includes: 'أرز بسمتي • بطاطس • تومية • مخلل', category: 'fatteh', available: true, order: 4 },
  { id: 's1', name: 'شاورما فراخ', emoji: '🌯', price: 125, description: 'شاورما دجاج', includes: 'تومية • مخلل • بهارات', category: 'sandwiches', sizes: [{ label: 'سوري', price: 125 }, { label: 'صاج', price: 105 }, { label: 'فينو كبير', price: 90 }, { label: 'فينو صغير', price: 80 }], available: true, order: 0 },
  { id: 's2', name: 'شاورما لحمة', emoji: '🥩', price: 140, description: 'شاورما لحمة', includes: 'طحينة • مخلل • بهارات', category: 'sandwiches', sizes: [{ label: 'سوري', price: 140 }, { label: 'صاج', price: 115 }, { label: 'فينو كبير', price: 110 }, { label: 'فينو صغير', price: 85 }], available: true, order: 1 },
  { id: 's3', name: 'شاورما مكس', emoji: '🌯', price: 140, description: 'شاورما لحمة وفراخ', includes: 'تومية • مخلل • بهارات', category: 'sandwiches', sizes: [{ label: 'سوري', price: 140 }, { label: 'صاج', price: 115 }, { label: 'فينو كبير', price: 110 }, { label: 'فينو صغير', price: 85 }], available: true, order: 2 },
  { id: 's4', name: 'شيش طاووق / كرسبي / زنجر', emoji: '🍗', price: 100, description: 'مع بطاطس', includes: 'بطاطس • تومية • مخلل', category: 'sandwiches', sizes: [{ label: 'سوري', price: 100 }, { label: 'صاج', price: 95 }], available: true, order: 3 },
  { id: 's5', name: 'فلافل', emoji: '🧆', price: 40, description: 'فلافل طازجة', includes: 'طازجة يومياً', category: 'sandwiches', sizes: [{ label: 'سوري', price: 40 }, { label: 'صاج', price: 27 }, { label: 'فينو', price: 25 }], available: true, order: 4 },
  { id: 's6', name: 'كبدة فراخ وبطاطس', emoji: '🍗', price: 55, description: 'كبدة فراخ مع بطاطس', includes: 'بطاطس • بهارات', category: 'sandwiches', sizes: [{ label: 'سوري', price: 55 }, { label: 'صاج', price: 45 }, { label: 'فينو', price: 40 }], available: true, order: 5 },
  { id: 's7', name: 'برجر', emoji: '🍔', price: 70, description: 'برجر متنوع', includes: 'خس • طماطم • صوص', category: 'sandwiches', sizes: [{ label: 'عادي', price: 70 }, { label: 'مميز', price: 85 }, { label: 'ديلوكس', price: 95 }], available: true, order: 6 },
  { id: 'a1', name: 'طبق بطاطس', emoji: '🍟', price: 40, description: 'بطاطس مقلية مقرمشة', includes: 'بطاطس طازجة', category: 'appetizers', available: true, order: 0 },
  { id: 'a2', name: 'علبة تومية', emoji: '🧄', price: 25, description: 'تومية بيضاء طازجة', includes: 'صوص تومية', category: 'appetizers', available: true, order: 1 },
  { id: 'a3', name: 'علبة سبايسي', emoji: '🌶️', price: 25, description: 'صوص سبايسي حار', includes: 'صوص حار مميز', category: 'appetizers', available: true, order: 2 },
  { id: 'a4', name: 'كول سلو', emoji: '🥗', price: 30, description: 'سلطة كول سلو طازجة', includes: 'كرنب • جزر • صوص', category: 'appetizers', available: true, order: 3 },
];

const LEGACY_OFFERS = [
  { id: 'o1', badge: '🔥 الأكثر مبيعاً', name: 'عرض الفتيت الخاص', description: 'فتة شاورما فراخ + فتة شاورما لحمة', includes: 'فتة شاورما فراخ + فتة شاورما لحمة مع أرز بسمتي وبطاطس', price: 255, active: true },
  { id: 'o2', badge: '👨‍👩‍👧‍👦 عائلي', name: 'وجبة التوفير العائلية', description: 'بروستد عائلية 10 قطع مع كل الملحقات', includes: '10 قطع بروستد + أرز بسمتي + بطاطس + 4 أرغفة + تومية + كاتشب + مخلل + سبايسي', price: 425, active: true },
  { id: 'o3', badge: '💰 اقتصادي', name: 'عرض ميني كايزر', description: 'وجبة ميني كايزر بسعر خاص', includes: 'وجبة ميني كايزر مع إضافات', price: 130, active: true },
  { id: 'o4', badge: '👑 الأفضل قيمة', name: 'كيلو الشاورما المشكل', description: 'كيلو لحمة وفراخ مع كل الملحقات', includes: 'كيلو شاورما مكس + أرز بسمتي + بطاطس + عيش + تومية + مخلل', price: 650, active: true },
  { id: 'o5', badge: '🔥 مشوي', name: 'فرخة مشوية كاملة', description: 'مشوي على الفحم مع أرز بسمتي', includes: 'فرخة كاملة + أرز بسمتي + رغيفا عيش + تومية + مخلل', price: 400, active: true },
  { id: 'o6', badge: '👑 مميز', name: 'وجبة المشكل البرنس', description: 'طبق مشكل فاخر يكفي الاثنين', includes: 'شيش طاووق + شاورما لحمة + شاورما فراخ + أرز + بطاطس + كول سلو + مخلل', price: 240, active: true },
];

const LEGACY_HOURS = {
  0: { name: 'الأحد', open: '8:00 AM', close: '3:00 AM', closed: false },
  1: { name: 'الاثنين', open: '8:00 AM', close: '3:00 AM', closed: false },
  2: { name: 'الثلاثاء', open: '8:00 AM', close: '3:00 AM', closed: false },
  3: { name: 'الأربعاء', open: '8:00 AM', close: '3:00 AM', closed: false },
  4: { name: 'الخميس', open: '8:00 AM', close: '3:00 AM', closed: false },
  5: { name: 'الجمعة', open: '8:00 AM', close: '3:00 AM', closed: false },
  6: { name: 'السبت', open: '8:00 AM', close: '3:00 AM', closed: false },
};

async function ensureLegacySeed(db, options = {}) {
  if (!db) return false;

  const authApi = window.firebase && firebase.auth ? firebase.auth() : null;
  if (!authApi || !authApi.currentUser) {
    return false;
  }

  const menuCollection = options.menuCollection || 'menu';
  const offersCollection = options.offersCollection || 'offers';
  const settingsDoc = options.settingsDoc || 'settings/main';

  try {
    const [menuSnap, offersSnap, settingsSnap] = await Promise.all([
      db.collection(menuCollection).limit(1).get(),
      db.collection(offersCollection).limit(1).get(),
      db.doc(settingsDoc).get(),
    ]);

    const writes = [];

    if (menuSnap.empty) {
      LEGACY_ITEMS.forEach(item => {
        const { id, ...payload } = item;
        writes.push(db.collection(menuCollection).doc(id).set(payload));
      });
    }

    if (offersSnap.empty) {
      LEGACY_OFFERS.forEach(offer => {
        const { id, ...payload } = offer;
        writes.push(db.collection(offersCollection).doc(id).set(payload));
      });
    }

    if (!settingsSnap.exists || !settingsSnap.data().workingHours) {
      writes.push(
        db.doc(settingsDoc).set(
          {
            categories: LEGACY_CATEGORIES,
            workingHours: LEGACY_HOURS,
          },
          { merge: true }
        )
      );
    }

    if (writes.length) {
      await Promise.all(writes);
    }

    return true;
  } catch (error) {
    console.warn('[Seed] Failed to initialize legacy data:', error.message);
    return false;
  }
}
